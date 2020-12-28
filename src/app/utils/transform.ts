/**
 * Convert XML structure to JSON.
 * @param response Service response connecting to feeds.
 * @returns feed structure.
 */
export function xmlToJson(response: string): { info: {}; items: any[]; } {
  const parser = new DOMParser();
  const xmlData = parser.parseFromString(response, 'application/xml');

  // First get the information (title, description, ...)
  const info: any = {};
  (xmlData.querySelectorAll('channel>*:not(item)') || []).forEach((chanel: any) => {
    const infoData: any = {};
    let found = false;
    chanel.childNodes.forEach((e: any) => {
      // skip text nodes
      if (e.nodeType === 3) { return; }
      found = true;
      infoData[e.tagName] = e.textContent;
    });
    if (found) { info[chanel.tagName] = infoData; }
    else { info[chanel.tagName] = chanel.textContent; }
  });

  // Then, get the list of items
  const items: any = [];
  (xmlData.querySelectorAll('channel>item') || []).forEach((item: any) => {
    const itemData: any = {};
    item.childNodes.forEach((e: any) => {
      // skip over text nodes
      if (e.nodeType === 3) { return; }
      // get attributes if exist (to support the 'enclosure' element)
      const attr: any = {};
      let found = false;
      for (let i = 0, atr = e.attributes, l = e.attributes.length; i < l; i++) {
        found = true;
        attr[atr[i].name] = atr[i].value;
      }
      if (found) { itemData[e.tagName] = attr; }
      else { itemData[e.tagName] = e.textContent; }
    });
    items.push(itemData);
  });

  return { info, items };
}

/**
 * Convert a feed list to a category list for each feed.
 * @param list List of feeds.
 * @returns categories structure.
 */
export function convertList(list: any[]): any[] {
  const names: any[] = [];
  const result: any[] = [];
  const feeds = list.map(info => ({
    name: info.link,
    category: info.category || info.description
  }));

  // Extract different name values
  feeds.forEach(feed => {
    if (!names.includes(feed.name)) { names.push(feed.name); }
  });

  // Loop through array of names and group categories
  names.forEach(name => {
    const categories: { completed: boolean; name: any; }[] = [];
    feeds.forEach(feed => {
      const category = {
        completed: true,
        name: feed.category
      };
      if (feed.name === name) { categories.push(category); }
    });
    result.push({ title: name, categories, allComplete: true });
  });

  return result;
}
