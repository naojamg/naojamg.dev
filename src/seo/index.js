import OpenGraph from './openGraph';
import Twitter from './twitter';
import General from './general';

const SEO = (opt = {}) => {
  const og = OpenGraph(opt);
  const t = Twitter(opt);
  const g = General(opt);

  return [...g, ...og, ...t];
}

export default SEO;