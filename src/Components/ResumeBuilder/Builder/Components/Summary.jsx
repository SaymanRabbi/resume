import React, { useRef } from 'react';
import Titttle from './Titttle';
import { Editor } from '@tinymce/tinymce-react';

const Summary = () => {
    const editorRef = useRef(null);
   const log = () => {
     if (editorRef.current) {
       console.log(editorRef.current.getContent());
     }
   };
    return (
        <div className=' mt-10'>
          <Titttle tittle='Professional Summary'/>
           <p  className=' text-gray-400 text-sm mb-5'>
           Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.
           </p>
           <Editor
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