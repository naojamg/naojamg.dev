const metaTags = {
  author:       'author',
  description:  'description',
  keywords:     'keywords',
  publisher:    'publisher',
  robots:       'robots',
  image:        'image'
};

const makeArray = (opt = {}) => {
  const tags = [];
  Object.keys(opt).forEach(key => {
    const value = opt[key];
    const property = metaTags[key];

    if (value && property) {
      if (Array.isArray(value))
        value.forEach(element => pushElement(property, element, tags));
      else
        pushElement(property, value, tags);
    }
  });
  return tags;
}

const pushElement = (name, content, obj) => {
  obj.push({
    name,
    content
  });
}

export default makeArray;