import React from "react";

//burada ayni kodu tekrar yazmamak icin asagidaki component olusturuldu
//ClickCounter ve HoverCounter component larini burada yeni ozellikler ile duzenlemis oluyoruz
const UpdatedComponent = (OriginalComponent, incrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
          //   burada app.js den gelen props lari original component lara gonderiyoruz
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
