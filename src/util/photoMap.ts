const modules = import.meta.glob<{ default: string }>('../assets/img/photography/*.{png,jpg,jpeg,gif,svg}', {eager: true})

export const photoMap: Record<string, string> = Object.entries(modules).reduce(
  (map, [fullPath, mod]) => {
    const file = fullPath.split('/').pop()!; // "myPhoto.jpg"
    map[file] = mod.default;
    return map;
  },
  {} as Record<string, string>
);