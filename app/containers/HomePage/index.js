import React from 'react';
import { FormattedMessage } from 'react-intl';

import Foo from 'components/Foo';

import Card from 'react-bootstrap/Card';

import messages from './messages';

export default function HomePage() {
  return (
    <Card>
      <Card.Header>
        <FormattedMessage {...messages.header} />
      </Card.Header>
      <Card.Body>
        <Foo />
      </Card.Body>
      <Card.Footer>Copyright &copy; 2020</Card.Footer>
    </Card>
  );
}
