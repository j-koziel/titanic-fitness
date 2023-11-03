import "./About.css";
import Avatar from "../../assets/avatar.jpg";
import { useState, useEffect } from "react";
import Error from "../../components/Error/Error";
import axios from "axios";

function About() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/users")
      .then((res) => {
        setStaff([...res.data]);
      })
      .catch((err) => <Error message={err.message} />);
  }, [setStaff]);

  return (
    <div className="about-page-container">
      <div className="about-us-container">
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          scelerisque finibus leo, ac aliquam nunc consectetur a. Nullam ut eros
          justo. Fusce aliquam felis quis elit volutpat pulvinar. Cras a
          sollicitudin justo. Sed dictum augue ac risus sagittis, sed cursus
          lorem malesuada. Pellentesque egestas neque ut ante euismod mattis.
          Nunc placerat vel risus congue interdum. Praesent vitae fermentum
          erat, vel elementum turpis. Phasellus et pharetra leo. Nam non felis
          non purus finibus imperdiet. Morbi molestie augue a diam egestas
          porttitor. Sed varius dignissim metus sed placerat. Nullam at finibus
          odio. Sed convallis, magna a cursus rhoncus, ex nibh faucibus velit,
          vitae sagittis dui odio quis ipsum. Phasellus non felis eu nisl
          imperdiet bibendum. Maecenas rutrum varius turpis in posuere. Duis sit
          amet varius massa. Mauris nisl risus, pretium eget ex in, venenatis
          viverra nulla. Ut finibus nisl vestibulum sem accumsan maximus. Donec
          consequat tincidunt elit rhoncus blandit. Aliquam bibendum magna at
          accumsan molestie. Etiam condimentum ornare lacus ac venenatis. Morbi
          aliquet, justo ac blandit posuere, libero ante molestie justo, sed
          dapibus justo urna id dolor. Vestibulum fringilla lobortis nibh, vel
          ultricies neque placerat nec. In in purus vel neque consectetur
          vehicula sed quis felis. Vivamus ac suscipit nisi. Integer a dapibus
          purus. Maecenas euismod urna at dolor consequat sollicitudin in quis
          ipsum. Morbi vitae eros augue. Aliquam porttitor, erat vel
          sollicitudin dapibus, mauris urna aliquam libero, quis dignissim
          libero leo vitae urna. Maecenas vel nunc ullamcorper, auctor sem eu,
          fermentum nisl. Suspendisse auctor quam nec fringilla sagittis. Nulla
          congue ornare urna sit amet ultrices. Integer semper laoreet est, ac
          semper metus efficitur a. Duis tellus magna, imperdiet quis varius
          pulvinar, dictum ut libero. Nullam nunc urna, egestas in sem non,
          porttitor gravida enim. Nam volutpat odio in pellentesque laoreet.
          Praesent eu rhoncus urna. Mauris tincidunt, enim non semper congue,
          massa odio tristique nunc, nec dictum nibh nisl vel erat. Sed quis
          tempor odio. Maecenas neque felis, dictum quis odio vel, pharetra
          ornare risus. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Morbi sit amet interdum neque.
          Maecenas vitae justo pretium, scelerisque sem non, feugiat diam.
          Aliquam ultricies odio nec ultrices sollicitudin. Maecenas consequat
          vitae ex nec semper. Curabitur efficitur dictum lectus, et viverra
          quam feugiat in. Pellentesque sed lectus nec nulla pretium condimentum
          nec ac tortor. Integer a tellus tellus. Phasellus venenatis, mi at
          lobortis volutpat, neque nisi pharetra enim, eu suscipit lorem nisi
          quis lorem. In egestas mi ac maximus luctus.
        </p>
      </div>
      <h2 style={{ fontSize: "40px" }}>Our Staff:</h2>
      <div className="staff-info-container">
        {staff.map((staffMember, i) => {
          if (staffMember["userType"] === "staff") {
            return (
              <div key={i} className="staff-info">
                <div className="staff-profile">
                  <img
                    src={Avatar}
                    alt={`Staff member: ${staffMember.firstName} ${staffMember.lastName}`}
                  />
                  <h2>
                    {staffMember.firstName} {staffMember.lastName}
                  </h2>
                </div>

                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam scelerisque finibus leo, ac aliquam nunc consectetur
                    a. Nullam ut eros justo. Fusce aliquam felis quis elit
                    volutpat pulvinar. Cras a sollicitudin justo. Sed dictum
                    augue ac risus sagittis, sed cursus lorem malesuada.
                    Pellentesque egestas neque ut ante euismod mattis. Nunc
                    placerat vel risus congue interdum. Praesent vitae fermentum
                    erat, vel elementum turpis. Phasellus et pharetra leo. Nam
                    non felis non purus finibus imperdiet. Morbi molestie augue
                    a diam egestas porttitor. Sed varius dignissim metus sed
                    placerat. Nullam at finibus odio. Sed convallis, magna a
                    cursus rhoncus, ex nibh faucibus velit, vitae sagittis dui
                    odio quis ipsum. Phasellus non felis eu nisl imperdiet
                    bibendum. Maecenas rutrum varius turpis in posuere.
                  </p>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default About;
