const QuestForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='quest-form-container'>
      <h3>QuestForm Heading</h3>
      <form className='add-quest-form' onSubmit={handleSubmit}></form>
    </div>
  );
};
export default QuestForm;
