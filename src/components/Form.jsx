import React from 'react';

import request from 'superagent';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'FORM',
    };
  }

  componentWillMount() {
    this.wakeupServer();
  }

  onSubmit(event) {
    event.preventDefault();

    const uri = `${process.env.CORE_URL_BASE}/contacts`;

    const payload = {
      first_name: this.refs.firstName.value,
      last_name: this.refs.lastName.value,
      email: this.refs.email.value,
      message: this.refs.message.value,
    };

    this.setState({ status: 'PROCESSING' });
    request.post(uri).send(payload).end((error, response) => {
      if (!error && !!response) {
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    });
  }

  wakeupServer() {
    // wakeup hobby-level server if it is turned down
    const uri = `${process.env.CORE_URL_BASE}`;
    request.get(uri).end(() => {});
  }

  isSuccess() {
    return this.state.status === 'SUCCESS';
  }

  isError() {
    return this.state.status === 'ERROR';
  }

  isProcessing() {
    return this.state.status === 'PROCESSING';
  }

  errorClassName() {
    return this.isError() ? 'text error' : 'hide';
  }

  renderForm() {
    return (
      <form id="form" onSubmit={this.onSubmit.bind(this)}>
        <div className="field-group">
          <label htmlFor="firstName">First</label>
          <input
            type="text"
            name="firstName"
            ref="firstName"
          />
        </div>

        <div className="field-group">
          <label htmlFor="lastName">Last</label>
          <input
            type="text"
            name="lastName"
            ref="lastName"
          />
        </div>

        <div className="field-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            ref="email"
          />
        </div>

        <div className="field-group">
          <label htmlFor="message">Message (optional)</label>
          <textarea
            type="text"
            name="message"
            ref="message"
            rows="4"
            maxLength="500"
          />
        </div>

        {this.renderError()}
        <input
          type="submit"
          defaultValue="Submit"
          className="text button"
          disabled={this.isProcessing()}
        />
      </form>
    );
  }

  renderSuccess() {
    return (
      <div className="text success">
        Thank You!
      </div>
    );
  }

  renderError() {
    return (
      <div className={this.errorClassName()}>
        Name and email are required
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.isSuccess() ? this.renderSuccess() : this.renderForm()}
      </div>
    );
  }
}

export default Form;
