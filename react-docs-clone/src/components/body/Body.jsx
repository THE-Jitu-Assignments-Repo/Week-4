import React from "react";
import "./body.css";
function Body() {
  return (
    <>
      <div className="body">
        <div className="body-content">
          <section className="body--elements">
            <div className="body--elements--parent">
              <div className="body-1">
                <h3 className="body-head-tag">Declarative</h3>
                <div>
                  <p className="body-p1">
                    React makes it painless to create interactive UIs. Design
                    simple views for each state in your application, and React
                    will efficiently update and render just the right components
                    when your data changes.
                  </p>
                  <p>
                    Declarative views make your code more predictable and easier
                    to debug.
                  </p>
                </div>
              </div>
              <div className="body-2">
                <h3 className="body-head-tag k">Component-Based</h3>
                <div>
                  <p className="body-p1">
                    Build encapsulated components that manage their own state,
                    then compose them to make complex UIs.
                  </p>
                  <p>
                    Since component logic is written in JavaScript instead of
                    templates, you can easily pass rich data through your app
                    and keep state out of the&nbsp;DOM.
                  </p>
                </div>
              </div>
              <div className="body-3">
                <h3 className="body-head-tag m">
                  Learn&nbsp;Once, Write&nbsp;Anywhere
                </h3>
                <div>
                  <p className="body-p1">
                    We don’t make assumptions about the rest of your technology
                    stack, so you can develop new features in React without
                    rewriting existing code.
                  </p>
                  <p>
                    React can also render on the server using Node and power
                    mobile apps using
                  </p>
                </div>
              </div>
            </div>
            <hr />
          </section>
        </div>
      </div>
    </>
  );
}

export default Body;
