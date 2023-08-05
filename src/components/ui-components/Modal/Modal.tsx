import React, { useEffect, useRef, FC, ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

interface IModal {
  onClose?: () => void;
  goToPage?: () => void;
  children: ReactNode;
}

export const Modal: FC<IModal> = ({ onClose, children, goToPage }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false)


  useEffect(() => {
    ref.current = document.querySelector<HTMLDivElement>("#modal_root");

    setMounted(true);

    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && (!ref.current?.contains(event.target) || !contentRef.current?.contains(event.target as HTMLElement)) && onClose) {
        setMounted(false);
        onClose();
        goToPage && goToPage();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (mounted && ref.current) ? createPortal(<div className={styles.modal}><div className={styles.content} ref={contentRef}>{children}</div></div>, ref.current) : null
}


