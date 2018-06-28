import React from 'react';
import 'BizPublic/common.pcss';
import styles from 'BizPublic/common.css';

const Header = () =>
    <div className={styles.headerWrap}>
        <div className={styles.headerContent}>
            <div className={styles.logo} />
            <div className={styles.logoText}>蜂巢111111</div>
        </div>
    </div>
;

export default Header;