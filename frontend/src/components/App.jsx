import { useEffect } from 'react';
import useTemplateStore from '../stores/templateStore'; // Updated to use the template store

function App() {
  const store = useTemplateStore();


  useEffect(() => {
    store.fetchTemplates();
  }, []); 

  return (
    <>
      <div>
        <h2>Gitignore Templates:</h2>
        <ul>
          {store.templates?.map((template) => (
            <li key={template._id}>
              <h3>{template.name}</h3>
              <pre>{template.content}</pre>
              <button onClick={() => store.deleteTemplate(template._id)}>Delete</button>
              <button onClick={() => store.toggleUpdate(template)}>Update</button>
            </li>
          ))}
        </ul>
      </div>

      {store.updateForm._id && (
        <div>
          <h2>Update Gitignore Template</h2>
          <form onSubmit={store.updateTemplate}>
            <input
              type="text"
              name="name"
              value={store.updateForm.name}
              onChange={store.handleUpdateFieldChange}
              placeholder="Template Name"
            />
            <textarea
              name="content"
              value={store.updateForm.content}
              onChange={store.handleUpdateFieldChange}
              placeholder="Gitignore Content"
            />
            <button type="submit">Update Template</button>
          </form>
        </div>
      )}

      <div>
        <h2>Create Gitignore Template</h2>
        <form onSubmit={store.createTemplate}>
          <input
            type="text"
            name="name"
            value={store.createForm.name}
            onChange={store.updateCreateFormField}
            placeholder="Template Name"
          />
          <textarea
            name="content"
            value={store.createForm.content}
            onChange={store.updateCreateFormField}
            placeholder="Gitignore Content"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
