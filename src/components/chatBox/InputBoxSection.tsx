const InputSection = () => {
  return (
    <>
      <form className="type-chat">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Ask MAIA..."
          />
          <span className="pen-icon">
            <i className="fa-regular fa-pen-to-square"></i>
          </span>
        </div>
      </form>
      <p className="mt-3 text-center check-imp">
        MAIA is still learning and makes mistakes. Consider checking important
        information.
      </p>
    </>
  );
};

export default InputSection;
