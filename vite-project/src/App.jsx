import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Post } from "./components/Post";
import { useEffect, useState } from "react";
import supabase from "./lib/helper/supabaseClient";

//use=hooks(agarrar cosas)
/*export default function App() {
  const [user, setUser] = useState(null); //useState define el valor con el que va a iniciar
  //setUser Funcion que actualiza una variable
  useEffect(() => {
    //useEffect ejecuta y renderiza depende de la variable [ ]

    const getSession = async () => {
      //destructuracion -> Nos permite obtener la propiedad deseada con las llaves
      const { data, error } = await supabase.auth.getSession();
      //await pide la sesion
      ///cuando llaves en vez de corchetes aggarra lo que necesito
      if (error) {
        console.log(error);
      } else {
        setUser(data?.session?.user);
        //signo de pregunta significa que puede existir o no
      }
    };
    getSession();
  }, []);*/

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession();
    setUser(session?.user);

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case "SIGNED_IN":
          setUser(session?.user);
          break;
        case "SIGNED_OUT":
          setUser(null);
          break;
        default:
          console.log("caso no estimado");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  /*  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }*/

  return (
    <>
      {user ? (
        <div>
          <h2>Authenticated</h2>
          <button onClick={handleLogout}>logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>login Github</button>
      )}
    </>
  );
}
/*
<button onClick={handleLogin} style={{ textAlign: "end" }}>
      Inicio Sesion Github
    </button>
    <div className="container">
      <Header />
      <div className="post">
        <Post
          titulo={"El pogo mas grande del mundo"}
          description={"Olavarria, 2008"}
          link={"/LOREDO.webp"}
          parrafo={
            "Registros de un concierto de 'Patricio Rey y sus redonditos de ricota' en el que se genero el fenomeno llamado 'El pogo mas grande del mundo'"
          }
        />
      </div>
      <Footer />
    </div>*/
