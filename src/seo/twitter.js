const metaTags = {
  card:         'twitter:card',
  site:         'twitter:site',
  creator:      'twitter:creator',
  title:        'twitter:title',
  description:  'twitter:description',
  image:        'twitter:image',
  image_alt:    'twitter:image:alt'

};

const makeArray = (options = {}) => {
  const tags = [];
  Object.keys(options).forEach(key => {
    const value = options[key];
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