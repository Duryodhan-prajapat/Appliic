import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const Breadcrumbs: React.FC<{ light?: boolean }> = ({ light = false }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const formatLabel = (path: string) => {
    return path
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  if (location.pathname === '/') return null;

  const textColor = light ? 'text-white/60' : 'text-slate-400';
  const activeTextColor = light ? 'text-white' : 'text-slate-900';
  const hoverColor = light ? 'hover:text-white' : 'hover:text-primary-600';
  const separatorColor = light ? 'text-white/30' : 'text-slate-300';

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-[10px] md:text-xs font-bold uppercase tracking-widest">
        <li className="flex items-center">
          <Link
            to="/"
            className={`flex items-center gap-1.5 transition-colors ${textColor} ${hoverColor}`}
          >
            <Home size={14} />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={to} className="flex items-center space-x-2">
              <ChevronRight size={12} className={separatorColor} />
              {last ? (
                <span className={activeTextColor} aria-current="page">
                  {formatLabel(value)}
                </span>
              ) : (
                <Link
                  to={to}
                  className={`transition-colors ${textColor} ${hoverColor}`}
                >
                  {formatLabel(value)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;