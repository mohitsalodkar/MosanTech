import { NavLink } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

import {
  Home,
  BriefcaseBusiness,
  FolderOpen,
  Tags,
  Mail,
} from 'lucide-react';

const navigation = [
  {
    label: 'Home',
    path: '/',
    icon: Home,
    end: true,
  },
  {
    label: 'Services',
    path: '/services',
    icon: BriefcaseBusiness,
  },
  {
    label: 'Our Work',
    path: '/work',
    icon: FolderOpen,
  },
  {
    label: 'Plans',
    path: '/plans',
    icon: Tags,
  },
  {
    label: 'Contact',
    path: '/contact',
    icon: Mail,
  },
];

export default function MobileBottomNav() {
  const reducedMotion = useReducedMotion();

  return (
    <nav
      aria-label="Mobile navigation"
      className="
        fixed inset-x-0 bottom-0 z-[100]
        isolate
        border-t border-[#C7A15A]/40
        bg-gradient-to-b
        from-[#3D0716]
        via-[#26040E]
        to-[#1A0509]
        shadow-[0_-8px_30px_rgba(26,5,9,0.28)]
        pb-[env(safe-area-inset-bottom)]
        md:hidden
      "
    >
      {/* Subtle gold top highlight */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-0 top-0 h-px
          bg-gradient-to-r
          from-transparent via-[#E6D3A3]/80 to-transparent
        "
      />

      <div
        className="
          mx-auto grid h-[66px] max-w-lg
          grid-cols-5 items-center px-1.5
        "
      >
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.end}
              aria-label={item.label}
              className="
                group relative flex h-full min-w-0
                flex-col items-center justify-center gap-1
                outline-none
              "
            >
              {({ isActive }) => (
                <>
                  {/* Active gold indicator */}
                  {isActive && (
                    <motion.span
                      layout={!reducedMotion}
                      aria-hidden="true"
                      className="
                        absolute top-0 h-[3px] w-8
                        rounded-b-full bg-[#E6D3A3]
                        shadow-[0_0_10px_rgba(230,211,163,0.4)]
                      "
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 28,
                      }}
                    />
                  )}

                  {/* Premium icon container */}
                  <motion.span
                    whileTap={
                      reducedMotion ? undefined : { scale: 0.92 }
                    }
                    className={`
                      relative flex h-9 w-10
                      items-center justify-center
                      rounded-2xl
                      transition-all duration-300
                      ${
                        isActive
                          ? `
                            border border-[#C7A15A]/35
                            bg-gradient-to-b
                            from-[#790D26]/80 to-[#4B0915]
                            text-[#E6D3A3]
                            shadow-[0_3px_12px_rgba(0,0,0,0.2)]
                          `
                          : `
                            border border-transparent
                            text-[#D8C1A7]
                            group-hover:border-[#C7A15A]/20
                            group-hover:bg-white/[0.04]
                            group-hover:text-[#E6D3A3]
                          `
                      }
                    `}
                  >
                    <Icon
                      size={21}
                      strokeWidth={isActive ? 2.2 : 1.7}
                      className="transition-all duration-300"
                    />
                  </motion.span>

                  {/* Navigation label */}
                  <span
                    className={`
                      max-w-full truncate px-0.5
                      text-[10px] leading-none
                      transition-colors duration-300
                      ${
                        isActive
                          ? 'font-bold text-[#E6D3A3]'
                          : 'font-medium text-[#D8C1A7]'
                      }
                    `}
                  >
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}