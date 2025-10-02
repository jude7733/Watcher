import { Colors, Typography, Spacings } from 'react-native-ui-lib';

// Configure the design system
Colors.loadDesignTokens({
  primaryColor: '#0a7ea4',
  secondaryColor: '#6c757d',
  successColor: '#28a745',
  errorColor: '#dc3545',
  warningColor: '#ffc107',
  infoColor: '#17a2b8',
  darkColor: '#343a40',
  lightColor: '#f8f9fa',
});

Typography.loadTypographies({
  heading: { fontSize: 36, fontWeight: '600' },
  subheading: { fontSize: 28, fontWeight: '500' },
  body: { fontSize: 16, fontWeight: '400' },
  caption: { fontSize: 12, fontWeight: '400' },
});

Spacings.loadSpacings({
  page: 20,
  card: 12,
  gridGutter: 16,
});
