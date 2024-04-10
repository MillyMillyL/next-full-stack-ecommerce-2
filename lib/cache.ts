import { unstable_cache as nextCache } from "next/cache"; //deal with data cache and everything else built in next js
import { cache as reactCache } from "react"; //for request memorization

type CallBack = (...args: any[]) => Promise<any>;

function cache<T extends CallBack>(
  cb: T,
  keyParts: string[],
  options: { revalidate?: number | false; tags?: string[] }
) {
  return nextCache(reactCache(cb), keyParts, options);
}

export default cache;
