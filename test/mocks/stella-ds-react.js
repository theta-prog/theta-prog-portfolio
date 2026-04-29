// eslint-disable-next-line @typescript-eslint/no-require-imports
const React = require('react');

const withAsChild = (children, props) => {
  if (!props.asChild || !React.isValidElement(children)) {
    return null;
  }

  const rest = { ...props };
  delete rest.asChild;

  return React.cloneElement(children, {
    ...rest,
    ...children.props,
  });
};

const omitProps = (props, keys) => {
  const nextProps = { ...props };

  for (const key of keys) {
    delete nextProps[key];
  }

  return nextProps;
};

const createPrimitive = (tag, omittedProps = []) => {
  const Primitive = React.forwardRef(({ children, ...props }, ref) => {
    return React.createElement(tag, { ref, ...omitProps(props, omittedProps) }, children);
  });

  Primitive.displayName = `Mock${tag.charAt(0).toUpperCase()}${tag.slice(1)}`;

  return Primitive;
};

const Button = React.forwardRef(({ asChild, children, ...props }, ref) => {
  const child = withAsChild(children, { asChild, ...props });

  if (child) {
    return child;
  }

  return React.createElement('button', { ref, type: 'button', ...props }, children);
});
Button.displayName = 'MockButton';

const Text = React.forwardRef(
  ({ as = 'p', children, asChild, ...props }, ref) => {
    const domProps = omitProps(props, ['size', 'weight', 'family', 'color', 'align', 'truncate']);
    const child = withAsChild(children, { asChild, ...domProps });

    if (child) {
      return child;
    }

    return React.createElement(as, { ref, ...domProps }, children);
  }
);
Text.displayName = 'MockText';

const Heading = React.forwardRef(
  ({ level = 2, children, asChild, ...props }, ref) => {
    const domProps = omitProps(props, ['size', 'weight', 'family', 'color', 'align']);
    const child = withAsChild(children, { asChild, ...domProps });

    if (child) {
      return child;
    }

    return React.createElement(`h${level}`, { ref, ...domProps }, children);
  }
);
Heading.displayName = 'MockHeading';

const Background = React.forwardRef(({ children, variant, theme, ...props }, ref) => {
  return React.createElement('div', { ref, 'data-variant': variant, 'data-theme': theme, ...props }, children);
});
Background.displayName = 'MockBackground';

const Avatar = React.forwardRef(({ alt, fallback, ...props }, ref) => {
  return React.createElement('span', { ref, 'data-avatar-alt': alt, ...props }, fallback || alt?.charAt(0) || 'A');
});
Avatar.displayName = 'MockAvatar';

const Header = createPrimitive('header', ['sticky', 'blur', 'mobileNav']);
const HeaderBrand = createPrimitive('div');
const HeaderNav = createPrimitive('nav');
const HeaderActions = createPrimitive('div');
const Footer = createPrimitive('footer');
const FooterContent = createPrimitive('div');
const FooterBottom = createPrimitive('div');
const Card = createPrimitive('div', ['hoverable']);
const CardHeader = createPrimitive('div');
const CardTitle = createPrimitive('h3');
const CardDescription = createPrimitive('p');
const CardContent = createPrimitive('div');
const CardFooter = createPrimitive('div');
const Stack = createPrimitive('div', ['direction', 'gap', 'align', 'justify', 'wrap']);
const Badge = createPrimitive('span');
const Separator = createPrimitive('div');
const FooterDivider = createPrimitive('hr');
const Carousel = createPrimitive('div', ['loop', 'slideAlign', 'slidesPerView', 'setApi', 'autoplay', 'autoplayInterval', 'pauseOnHover']);
const CarouselContent = createPrimitive('div');
const CarouselItem = createPrimitive('div', ['slideLabel']);
const CarouselDots = createPrimitive('div');
const CarouselPrevious = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('button', { ref, type: 'button', ...props }, children);
});
CarouselPrevious.displayName = 'MockCarouselPrevious';

const CarouselNext = React.forwardRef(({ children, ...props }, ref) => {
  return React.createElement('button', { ref, type: 'button', ...props }, children);
});
CarouselNext.displayName = 'MockCarouselNext';

module.exports = {
  Avatar,
  Background,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Footer,
  FooterBottom,
  FooterContent,
  FooterDivider,
  Header,
  HeaderActions,
  HeaderBrand,
  HeaderNav,
  Heading,
  Separator,
  Stack,
  Text,
};