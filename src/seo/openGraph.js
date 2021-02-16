const metaTags = {
  /* Basic Metadata */
  title:                    'og:title',
  type:                     'og:type',
  image:                    'og:image',
  url:                      'og:url',

  /* Optional Metadata */
  audio:                    'og:audio',
  description:              'og:description',
  determiner:               'og:determiner',
  locale:                   'og:locale',
  locale_alternate:         'og:locale:alternate',
  site_name:                'og:site_name',
  video:                    'og:video',

  /* Structured Properties */
  image_url:                'og:image:url',
  image_secure_url:         'og:image:secure_url',
  image_type:               'og:image:type',
  image_width:              'og:image:width',
  image_height:             'og:image:height',
  image_alt:                'og:image:alt',

  video_secure_url:         'og:video:secure_url',
  video_type:               'og:video:type',
  video_width:              'og:video:width',
  video_height:             'og:video:height',

  audio_secure_url:         'og:audio:secure_url',
  audio_type:               'og:audio:type',

  /* Object Types */
  /* No Vertical */
  article_published_time:   'article:published_time',
  article_modified_time:    'article:modified_time',
  article_expiration_time:  'article:expiration_time',
  article_author:           'article:author',
  article_section:          'article:section',
  article_tag:              'article:tag',

  profile_first_name:       'profile:first_name',
  profile_last_name:        'profile:last_name',
  profile_username:         'profile:username',
  profile_gender:           'profile:gender',

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

const pushElement = (property, content, obj) => {
  obj.push({
    property,
    content
  });
}

export default makeArray;