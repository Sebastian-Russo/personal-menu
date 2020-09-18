import React, { useState } from "react";

export default function NewCategory(props) {
  const [value, setValue] = useState("");

  return (
    <div>
      <label htmlFor="create">Create a new category</label>
      <input
        type="text"
        id="otherValue"
        name="other"
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <button type="button" onClick={() => {
        props.addNewCategory(value);
        setValue("");
        }}>
        Add Category
      </button>
    </div>
  );
}
