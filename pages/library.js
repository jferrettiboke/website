import { useState } from "react";
import styled from "@emotion/styled";
import Router from "next/router";
import Footer from "../shared/footer";
import Nav from "../shared/nav";
import Content from "../shared/content";
import { Wrapper } from "../shared/blog";
import library from "../public/json/library.json";
import { useSearchParam } from "react-use";
import { toggle, titleCase, slugify } from "../shared/util";
import { useMemo } from "react";

const tagset = new Set();

library.forEach((l) => {
  l.tags.forEach((t) => {
    tagset.add(t);
  });
});

const tags = Array.from(tagset).sort((a, b) => a.localeCompare(b));

export default function Library() {
  const [tag, setSelected] = useState(useSearchParam("tag"));

  const setTag = (t) => {
    setSelected(t);
    Router.push({
      pathname: window.location.pathname,
      search: `tag=${t}`,
    });
  }

  const visible = useMemo(() => {
    if (!tag) return library;
    return library.filter((l) => l.tags.includes(tag));
  }, [tag]);

  return (
    <>
      <Wrapper>
        <Nav />
        <Content>
          <Inner>
            <h2>Run serverless workflows in minutes</h2>
            <p>
              Explore our library of example workflows and get started in one
              click.
            </p>

            <Grid>
              <Menu>
                <label>
                  <input
                    type="checkbox"
                    checked={!tag}
                    onClick={() => setTag("")}
                  />{" "}
                  All
                </label>

                <hr />

                {tags.map((t) => {
                  return (
                    <label>
                      <input
                        type="checkbox"
                        checked={tag === t}
                        onClick={() => {
                          if (tag === t) {
                            setTag("");
                            return;
                          }
                          setTag(t);
                        }}
                      />{" "}
                      {titleCase(t)}
                    </label>
                  );
                })}
              </Menu>
              <div>
                <Items>
                  {visible.map((item) => (
                    <Item href={`/library/${slugify(item.title)}`}>
                      <p>{item.title}</p>
                      <p>{item.subtitle}</p>
                    </Item>
                  ))}
                </Items>
              </div>
            </Grid>
          </Inner>
        </Content>
        <Footer />
      </Wrapper>
    </>
  );
}

const Inner = styled.div`
  box-sizing: border-box;
  padding: 100px 0;
  min-height: calc(100vh - 270px);

  h2,
  h2 + p {
    text-align: center;
  }

  h2 {
    margin: 0;
  }
  h2 + p {
    margin: 0.5rem 0 3rem;
    opacity: 0.6;
  }
`;

const Grid = styled.div`
  display: grid;
  display: grid;
  grid-template-columns: 175px auto;
  gap: 40px;
  margin: 80px 0 0;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const Item = styled.a`
  text-decoration: none;

  display: block;
  border-radius: 5px;
  border: 1px solid rgb(244, 244, 244);
  background: #fff;
  padding: 2rem;

  border: 1px solid transparent;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03), 0 3px 25px rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }

  p {
    margin: 0;
  }

  p:first-of-type {
    color: #222631;
    opacity: 0.8;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  p:last-of-type {
    color: var(--dark-grey);
    font-size: 14px;
  }
`;

const Menu = styled.div`
  h4 {
    margin: 0 0 1em;
  }

  font-size: 16px;

  input {
    display: inline;
    width: auto;
    margin-right: 0.75rem;
  }

  label {
    display: flex;
    align-items: center;
  }
  label,
  label + label {
    margin: 0.25rem 0;
    cursor: pointer;
  }

  input {
    height: 30px;
  }

  hr {
    margin: 1rem 0;
    border: 0;
    border-top: 1px solid #ddd;
  }
`;