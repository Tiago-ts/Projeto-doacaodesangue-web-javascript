import React, { useEffect, useState } from "react";
import jwtdecode from "jwt-decode";
import logo from "./Styles/img/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSearch,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { GlobalStyle, Navbar, Page, Profile, TodoContent } from "./Styles/Home";
import { uploadImage, updateUser, getFriends } from "./functions/UserFunctions";
import { Posts } from "./Posts";
import { ChatFriends } from "./ChatFriends";
import { Chat } from "./Chat";
import { Search } from "./Search";
export default function Home(props) {
  const [imageProfile, setImageProfile] = useState(
    useSelector((state) => state.UserReducer.profileImage)
  );
  const [user, setUser] = useState(jwtdecode(localStorage.token));
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [friends, setFriends] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (jwtdecode(localStorage.token).image) {
      dispatch({
        type: "SET_IMAGE",
        image: jwtdecode(localStorage.token).image,
      });
      setImageProfile(jwtdecode(localStorage.token).image);
    }
    getFriends(localStorage.token).then((response) => {
      setFriends(response.friendsData);
      setPosts(response.posts);
    });
  }, []);

  const onChangeImage = (e) => {
    if (!e.target.files[0]) return;
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    uploadImage(formData).then((response) => {
      if (response.status === 200) {
        setImageProfile(response.data.link);
        return updateUser(
          {
            newProfileImage: response.data.link,
            deletehash: response.data.deletehash,
          },
          localStorage.token
        ).then((res) => {
          localStorage.token = res;
          dispatch({ type: "SET_IMAGE", image: response.data.link });
        });
      }

      window.alert("Erro ao realizar o upload");
      console.log(response, "repso");
    });
  };
  const logOut = (_) => {
    const { history } = props;
    localStorage.clear();
    return history.push("/");
  };
  const onChange = (ev) => {
    setSearch(ev.currentTarget.value);
  };
  const clearInput = () => {
    setSearch("");
  };
  return (
    <Page>
      <GlobalStyle />

      <Navbar>
        <div className="logo">
          <img src={logo} alt="PostToView" />
        </div>
        <div className="search">
          <form>
            <label className="label-input">
              <input
                type="text"
                name="search"
                value={search}
                onChange={onChange}
              />
              <div className="svg">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </label>
          </form>
        </div>
        <div className="logout">
          <FontAwesomeIcon icon={faSignOutAlt} onClick={logOut} />
        </div>
      </Navbar>
      {!!search.length && (
        <Search
          input={search}
          setFriends={setFriends}
          friends={friends}
          clear={clearInput}
        />
      )}
      <TodoContent>
        <Chat />
        {/* <ChatFriends /> */}
        <Posts {...user} posts={posts} />
        <Profile image={imageProfile}>
          <div className="contentProfile">
            <div className="circleProfile">
              <div className="uploadImage">
                <label for="file-input">
                  <FontAwesomeIcon icon={faUpload} />
                </label>

                <input id="file-input" type="file" onChange={onChangeImage} />
              </div>
            </div>
            <h3>{user.name}</h3>
            <div className="infoProfile">
              <ul>
                <li>
                  Amigos <div className="friendscont">{friends.length}</div>
                </li>
                <li>
                  Notificações
                  <div className="friendscont">{friends.length}</div>
                </li>
                <li>
                  Convites<div className="friendscont">{friends.length}</div>
                </li>
                <li>
                  Posts<div className="friendscont">{friends.length}</div>
                </li>
              </ul>
            </div>
          </div>
        </Profile>
      </TodoContent>
    </Page>
  );
}
