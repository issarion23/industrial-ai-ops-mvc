export const getStatusStyles = (status) => {
    switch (status) {
      case 'Critical':
        return {
          bg: 'bg-red-900/50',
          text: 'text-red-400',
          border: 'border-red-500',
          dot: 'bg-red-500 animate-pulse',
        };
      case 'Warning':
        return {
          bg: 'bg-yellow-900/50',
          text: 'text-yellow-400',
          border: 'border-yellow-500',
          dot: 'bg-yellow-500',
        };
      default:
        return {
          bg: 'bg-green-900/50',
          text: 'text-green-400',
          border: 'border-green-500',
          dot: 'bg-green-500',
        };
    }
  };
  