// src/util/iconMap.ts
// 1) Glob‐import every .svg in your stack‐svg folder, eagerly
const modules = import.meta.glob<{ default: string }>(
    '../assets/img/stack-svg/*.svg',
    { eager: true }
);

// 2) Turn it into a simple Record<iconName, url>
export const iconMap: Record<string,string> = Object.entries(modules).reduce(
    (map, [fullPath, mod]) => {
        // fullPath is like "../../assets/img/stack-svg/react.svg"
        const filename = fullPath.split('/').pop()!.replace(/\.svg$/, '');
        map[filename] = mod.default;
        return map;
    },
    {} as Record<string,string>
);