# Combinator
  - Descendent
  - List
  - Next sibling
  - Child

  ```html
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ipsum, facere eaque similique nulla ab nihil minima dolorum molestiae rerum. Earum sit eaque porro odit hic amet neque id incidunt.
    </p>

    <article>
      <h2>The Lorem Ipsum Dolor ...</h2>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ipsum, <span>facere eaque similique</span> nulla ab nihil minima dolorum molestiae rerum. Earum sit eaque porro odit hic amet neque id incidunt.
      </p>

      <p>
        Lorem ipsum, <mark>dolor sit amet consectetur adipisicing elit</mark>. Eius ipsum, facere eaque similique nulla ab nihil minima dolorum molestiae rerum. Earum sit eaque porro odit hic amet neque id incidunt.
      </p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ipsum, facere eaque similique nulla ab nihil minima dolorum molestiae rerum. Earum sit eaque porro odit hic amet neque id incidunt.
      </p>
    </article>

    <aside>
      <ul>
        <li>One
          <ul>
            <li>item 1</li>
            <li>item 2</li>
          </ul>
        </li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </aside>
  ```

  ```css
    /* Descendent */
    article p {
      color: red;
    }

    /* List */
    span, mark {
      color: red;
    }

    /* Next sibling */
    h2 + p {
      color: red;
    }

    /* Child */
    aside > ul {
      margin-top: 60px;
      color: red; /* cores excessão */ 
    }
  ```
