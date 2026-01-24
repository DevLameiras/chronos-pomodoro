import styles from './Heading.module.css';

type HeadingProps = {
  children: React.ReactNode;
  // Tudo que o react aceita esta nesse children
  // tipagem para o react aceitar tudo
};

export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
