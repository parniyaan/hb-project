import styles from './container.module.sass';
import cls from "@/utils/class_names";

function Container({ children, className = undefined, ...otherProps }: any) {
	return <div className={cls(styles.container, className)} {...otherProps}>{children}</div>
}

export default Container;