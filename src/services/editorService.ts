import { Monaco } from '@/lib/editor';

export function formatOrigin() {
  return Monaco.getInstance().formatOrigin();
}

export function formatModify() {
  return Monaco.getInstance().formatModify();
}
