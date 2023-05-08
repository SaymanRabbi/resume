import React, { useContext, useRef, useState } from 'react';
import Titttle from './Titttle';
import { Editor } from '@tinymce/tinymce-react';
import { data } from '../../../../App';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Summary = () => {
    const editorRef = useRef(null);
    const {allData,setAllData } = useContext(data)
    const path = useLocation().pathname.split('/')[2]
    const log = () => {
    const data =editorRef.current.getContent();
    const value = data.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ');
      setAllData({...allData,
        [path]:{
          ...allData[path],
          personal_details:{
            ...allData[path]?.personal_details,
            summary:value
          }
        }
      })
   };
   useEffect(()=>{
    localStorage.setItem('data',JSON.stringify(allData))
  },[allData])
    return (
        <div className=' mt-10'>
          <Titttle tittle='Professional Summary'/>
           <p  className=' text-gray-400 text-sm mb-5'>
           Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.
           </p>
           <Editor
           onEditorChange={log}
           onInit={(evt, editor) => editorRef.current = editor}
           initialValue=""
           init={{
            branding: false,
            selector: 'textarea',
             height: 200,
             resize: false,
             menubar: false,
             plugins: [
               'advlist autolink lists link image charmap print preview anchor',
               'searchreplace visualblocks code fullscreen',
               'insertdatetime media table paste code help wordcount'
             ],
             toolbar: 'undo redo | formatselect | ' +
             'bold italic backcolor | alignleft aligncenter ' +
             'alignright alignjustify | bullist numlist outdent indent | ' +
             'removeformat | help',
             content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
           }}
           />
        </div>
    );
};

export default Summary;