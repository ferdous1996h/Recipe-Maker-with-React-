export default function Form(props) {
  return (
    <article className="bodyPart">
      <section>
        <form action={props.clk} className="form">
          <label htmlFor="recipe"></label>
          <input
            type="text"
            id="recipeText"
            name="recipePutter"
            placeholder="e.g. oregano"
          />
          <button>Add ingredient</button>
        </form>
      </section>
      <main>
        {props.ingreC.length > 0 ? (
          <article>
            <h2>Ingredients on hand:</h2>
            <ul>{props.items}</ul>
          </article>
        ) : null}

        {props.ingreC.length > 3 && (
          <div className="submitCard" ref={props.ref}>
            <div className="top">
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <div className="bottom">
              <button onClick={props.resC}>Get a Recipe</button>
            </div>
          </div>
        )}
      </main>
    </article>
  );
}
