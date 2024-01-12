import React from 'react';
import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/DarkMode/theme-provider';

const ModeToggle = () => {
  const { setTheme } = useTheme();
  const theme = localStorage.getItem('vite-ui-theme');

  if (theme === 'light') {
    return (
      <Button variant="ghost" size="sm" onClick={() => setTheme('dark')}>
        <Sun size={18} />
      </Button>
    );
  }

  return (
    <Button variant="ghost" size="sm" onClick={() => setTheme('light')}>
      <Moon size={18} />
    </Button>
  );
};

export default ModeToggle;
