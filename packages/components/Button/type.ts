import type { Component } from "vue";

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type NativeType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'small' | 'default' | 'large';

export interface ButtonProps {
  tag?: string | Component;
  type?: ButtonType;
  nativeType?: NativeType;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  icon?: string | Component;
  circle?: boolean;
  plain?: boolean;
  round?: boolean;
}
