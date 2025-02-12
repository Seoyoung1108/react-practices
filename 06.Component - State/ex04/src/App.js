import React, { useState } from 'react';
import Modal from "react-modal";
import ReactModal from "react-modal";
import * as styles from './modal.scss';

ReactModal.setAppElement('body');

export default function App() {
    const [isOpen01, setIsOpen01] = useState(false);
    const [isOpen02, setIsOpen02] = useState(false);
    const [isOpen03, setIsOpen03] = useState(false);
    const [isOpen04, setIsOpen04] = useState(false);
    const [isOpen05, setIsOpen05] = useState(false);

    return (
        <>
            {/* example modal01: Minimal */}
            <button onClick={(e)=>setIsOpen01(true)}>modal01</button>
            <br/><br/>

            <Modal
                isOpen={isOpen01}
                contentLabel="modal01 example">
                <h1>modal01</h1>
                <button onClick={(e)=>setIsOpen01(false)}>
                    Close
                </button>
            </Modal>


            {/* example modal02: Using onRequestClose */}
            <button onClick={(e)=>setIsOpen02(true)}>modal02</button>
            <br/><br/>

            <Modal
                isOpen={isOpen02}
                onRequestClose={(e)=>setIsOpen02(false)}
                contentLabel="modal02 example">
                <h1>modal02</h1>
                <button onClick={(e)=>setIsOpen02(false)}>
                   Close
                </button>
            </Modal>


            {/* example modal03: Using shouldCloseOnOverlayClick */}
            <button onClick={(e)=>setIsOpen03(true)}>modal03</button>
            <br/><br/>
            <Modal
                isOpen={isOpen03}
                onRequestClose={(e)=>setIsOpen03(false)}
                shouldCloseOnOverlayClick={true}
                contentLabel="modal03 example">
                <h1>modal03</h1>
                <button onClick={(e)=>setIsOpen03(false)}>
                    Close
                </button>
            </Modal>


            {/* example modal04: Using inline styles */}
            <button onClick={(e)=>setIsOpen04(true)}>modal04</button>
            <br/><br/>

            <Modal
                isOpen={isOpen04}
                contentLabel="modal04 example"
                style={{
                    overlay:{
                        backgroundColor:'RGB(0,0,0,0.5)'
                    },
                    content:{
                        backgroundColor:'yellow'
                    }
                }}>
                <h1>modal04</h1>
                <button>
                    Close
                </button>
            </Modal>


            {/* example modal04: Using CSS/SASS styles */}
            <button onClick={(e)=>setIsOpen05(true)}>modal05</button>
            <br/><br/>

            <Modal
                isOpen={isOpen05}
                className={styles.Modal}
                overlayClassName={styles.Overlay}
                style={{content: {width: 350}}}
                contentLabel="modal05 example">
                <h1>비밀번호입력</h1>
                <div>
                    하하하하하하하~
                </div>
                <div className={ styles['modal-dialog-buttons'] }>
                    <button>확인</button>
                    <button>취소</button>
                </div>
            </Modal>
        </>
    );
}