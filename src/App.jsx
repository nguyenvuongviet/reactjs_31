import React from "react";
import FormValidation from "./FormValidation";
import Table from "./FormValidation/Table";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">React Form - Validation</h1>
      <FormValidation />
      <Table />
    </div>
  );
};

export default App;
