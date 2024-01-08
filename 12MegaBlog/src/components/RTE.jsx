import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import {Controller} from "react-hook-form";

function RTE({ name, label, control, defaultValue = "" }) {
  //THIS Control is the transfer of RTE to parent element or the component which uses this RTE
  return (
    <div className="w-full">
      {label && <label className="">{label}</label>}
      <Controller
        name={name || "content"}
        //this is the file name of the text editor, if the name is name then show name, otherwise '' show content
        control={control}
        //this control is the control that we transfer to parent component.
        render={({
          //this render tells that if any changes occur on the from reder this change with the field
          field: { onChange },
        }) => (
          <Editor
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

export default RTE;
