import { test , moduleForComponent } from 'appkit/tests/helpers/module_for';
import GravatarImageComponent from 'appkit/components/gravatar-image';

var component;

moduleForComponent('gravatar-image', 'Unit - Gravatar image component', 
                   {
  setup: function() {
    component = this.subject();
  }
});

test('src with valid email', function() {
  component = GravatarImageComponent.create({
      email: 'tom@example.com'
  });

    equal(component.get('src'),
    'http://www.gravatar.com/avatar/e4f7cd8905e896b04425b1d08411e9fb.jpg?s=80');
});

test('src with blank email', function() {
    component = GravatarImageComponent.create({
        email: ''
    });

    equal(component.get('src'),
    'http://www.gravatar.com/avatar/00000000000000000000000000000000.jpg?s=80');

});

test('src with size set', function() {
    component = GravatarImageComponent.create({
        email: 'tom@example.com',
        size: 512
    });

    equal(component.get('src'),
        'http://www.gravatar.com/avatar/e4f7cd8905e896b04425b1d08411e9fb.jpg?s=512');
});