const modules = import.meta.glob<{ default: string }>('../assets/img/scroller/*.{png,jpg,jpeg,gif,svg}', {eager: true})

export const scrollerMap: Record<string, string> = Object.entries(modules).reduce(
  (map, [fullPath, mod]) => {
    const file = fullPath.split('/').pop()!; // "myPhoto.jpg"
    map[file] = mod.default;
    return map;
  },
  {} as Record<string, string>
);