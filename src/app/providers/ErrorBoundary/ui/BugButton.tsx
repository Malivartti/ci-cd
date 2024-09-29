import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

const BugButton = () => {
  const [isError, setIsError] = useState(false);

  const toggleError = () => {
    setIsError((last) => !last);
  };

  useEffect(() => {
    if (isError) {
      throw new Error();
    }
  }, [isError]);

  return (
    <Button
      onClick={toggleError}
    // eslint-disable-next-line i18next/no-literal-string
    >
      throw error
    </Button>
  );
};

export { BugButton };
