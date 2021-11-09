declare module '@tryghost/admin-api' {
  import {
    BrowseFunction,
    PostsOrPages,
    PostOrPage,
    ReadFunction,
    Pagination,
  } from '@tryghost/content-api';

  export interface GhostAdminApiConstructorOptions {
    url: string;
    version: 'v3';
    key: string;
  }

  export interface AdminPostOrPage extends Omit<PostOrPage, 'html'> {
    mobiledoc: string;
  }

  export interface AdminPostsOrPages extends Array<AdminPostOrPage> {
    meta: { pagination: Pagination };
  }

  declare interface GhostAdminApi {
    pages: {
      browse: BrowseFunction<AdminPostsOrPages>;
      read: ReadFunction<AdminPostOrPage>;
    };
  }

  declare class GhostAdminApi {
    constructor(options: GhostAdminApiConstructorOptions) {}
  }

  export default GhostAdminApi;
}

declare module 'react-mobiledoc-editor' {
  import { ComponentType, ComponentPropsWithoutRef, Context } from 'react';

  export interface ContainerProps {
    mobiledoc?: any;
    cards?: Array<any>;
    atoms?: Array<any>;
    spellcheck?: boolean;
    autofocus?: boolean;
    placeholder?: string;
    options?: any;
    serializeVersion?: string;
    onChange?: (value?: any) => void;
    willCreateEditor?: () => void;
    didCreateEditor?: () => void;
  }

  export declare const Container: ComponentType<ContainerProps>;

  export declare const Editor: ComponentType<ComponentPropsWithoutRef<'div'>>;
  export declare const Toolbar: ComponentType<{
    className?: string;
  }>;

  export interface MarkupButtonProps
    extends ComponentPropsWithoutRef<'button'> {
    tag: string;
    activeClassName?: string;
  }

  export declare const MarkupButton: ComponentType<MarkupButtonProps>;

  export interface CardProps {
    payload: object;
    edit: () => void;
    save: (payload: object) => void;
    cancel: () => void;
    remove: () => void;
    isInEditor: boolean;
    isEditing: boolean;
  }

  export declare function classToDOMCard(component: any): any;

  export declare const ReactMobileDocContext: Context<any>;
}
