import { test , moduleForComponent } from 'appkit/tests/helpers/module_for';
import MailToComponent from 'appkit/components/mail-to';

var component;

moduleForComponent('mail-to', 'Unit - Mail to component', 
                   {
  setup: function() {
    component = this.subject();
  }
});

test('href', function() {
  component = MailToComponent.create({
      email: 'test@example.com'
  });

    equal(component.get('href'),
    'mailto:test@example.com');
});
