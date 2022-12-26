import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const QnAReply = () => {
    const [List, setList] = useState([]);
    const{id} = useParams();

    const [account, setAccount] = useState({
        cont: '',
        product_num: '1234',
        user_id: "admin",
        id: 8,
        product_name: "아이패드",
        child_id: id
    })



     useEffect(() => {
         axios({
             method: 'get',
             url: `/api/QnA/reply/${id}`,
             data: {id:id}
         })
         .then(res => setList(res.data))
     }, [])

     const QnaCont = (e) => {
        setAccount({...account, [e.target.name]: e.target.value,});
        console.log(account)
    }

    const addadd = (e) => {
        alert("답변이 등록되었습니다..");
        axios({
            method: 'post',
            url: '/api/view/Qna/write',
            data: {
                ...account
            } 
        })
    }

     




    return(
        <div>
        <div className=''>
        <p>아이디: {List.user_id}</p>
        </div>
        <div>
        <p>질문내용: {List.cont}</p>
        </div>
        <div>
        <p>날짜: {List.regdate}</p>
        </div>
        <div>
        <p>답변</p>
        </div>
        <div className="QnAWrite2">
                <form id= "Subm">
                    <div className="QnAContBox">
                        <textarea id = "asd" className="QnAcont" placeholder="답변을 입력하세요." onChange={QnaCont} name="cont"></textarea>
                        
                    </div>
                    <a className="add" role="button" onClick={addadd}>등록</a>

                </form>
            </div>

 </div>

    )
}

export default QnAReply;
    
