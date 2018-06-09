import React, { Component } from 'react';
import { observer } from 'mobx-react';
import styles from './index.css';
import store from './store.js'

const defaultTitleIcon = (
    <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-2-Copy-6" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="home/-建议反馈-1440x900-copy-6" transform="translate(-1392.000000, -621.000000)" fillRule="nonzero" fill="#FFFFFF">
                <g id="Group-32" transform="translate(1376.000000, 613.000000)">
                    <path d="M24,8 L24,10 L18,10 L18,22 L30,22 L30,16 L32,16 L32,24 L16,24 L16,8 L24,8 Z M30.5355339,8.05025253 L31.9497475,9.46446609 L23.4644661,17.9497475 L22.0502525,16.5355339 L30.5355339,8.05025253 Z" id="Combined-Shape"></path>
                </g>
            </g>
        </g>
    </svg>
);
@observer
class Popover extends Component {
  render() {
    const {getContactData} = store;
    return (
        <div className={styles.PopoverWrap}>
            <div className={styles.wrapper}>
                <div className={styles.contactBox}>
                    {defaultTitleIcon}
                    <span className={styles.contactText}>联系·建议</span>
                </div>
                <div className={styles.tooltip}>
                    <div className={styles.contactInfo}>
                        {
                            store.contactData.map((item,index)=>
                                
                                    <div className={styles.contactInfoItem} key={index}>
                                        <div className={styles.contactInfoHeader}>
                                            <span className={styles.icon} />
                                            <span className={styles.iconText}>{item.title}</span>
                                        </div>
                                        <div className={styles.contactInfoBody}>
                                            {
                                                item.content.map((items,indexs)=>
                                                    <p key={indexs}>
                                                        <span className={styles.contactInfoBodyLabel}>{items.name}:</span>
                                                        <span className={styles.contactInfoBodyValue}>
                                                            {
                                                                item.title === '意见反馈联系人' ?
                                                                <a href={`mailto:${items.phone}`}>{items.phone}</a>
                                                                : items.phone
                                                            }
                                                        </span>
                                                    </p>
                                                )
                                            }
                                           
                                        </div>
                                    </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    );
  }
}


export default Popover;
