/**
 * A helper class to provide common functionality for working with Image objects
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
declare class ImageHelper {
  /**
   * Composite a canvas object by rendering it to a single texture
   * @param object - The {@link PIXI.DisplayObject} to render to a texture
   *                 (type: `PIXI.DisplayObject`)
   * @param options - Additional named options
   *                  (default: `{}`)
   * @returns The composite {@link PIXI.Texture} object
   *          (type: `PIXI.Texture`)
   */
  static compositeCanvasTexture (
    object: PIXI.DisplayObject,
    options?: ImageHelper.CompositeOptions
  ): PIXI.Texture

  /**
   * Create thumbnail preview for a provided image path.
   * @param src - The string URL or {@link PIXI.DisplayObject} of the texture to
   *              render to a thumbnail
   *              (type: `PIXI.DisplayObject`)
   * @param options - Additional named options passed to the
   *                  {@link ImageHelper.compositeCanvasTexture} method
   *                  (default: `{}`)
   * @returns The parsed and converted thumbnail data
   */
  static createThumbnail (
    src: string | PIXI.DisplayObject,
    options?: ImageHelper.CompositeOptions
  ): Promise<ImageHelper.ThumbnailReturn>

  /**
   * Extract a texture to a base64 PNG string
   * @param texture - The {@link PIXI.Texture} object to extract
   *                  (type: `PIXI.Texture`)
   * @returns A base64 png string of the texture
   */
  static textureToImage (texture: PIXI.Texture): string
}

declare namespace ImageHelper {
  /**
   * An interface for options for the {@link ImageHelper.createThumbnail} and
   * {@link ImageHelper.compositeCanvasTexture} methods.
   */
  interface CompositeOptions {
    /**
     * Center the texture in the rendered frame?
     * @defaultValue `true`
     */
    center?: boolean

    /**
     * The desired height of the output texture
     * @defaultValue The height of the object passed to
     *               {@link ImageHelper.compositeCanvasTexture}
     */
    height?: number

    /**
     * A horizontal translation to apply to the object
     * @defaultValue `0`
     */
    tx?: number

    /**
     * A vertical translation to apply to the object
     * @defaultValue `0`
     */
    ty?: number

    /**
     * The desired width of the output texture
     * @defaultValue The width of the object passed to
     *               {@link ImageHelper.compositeCanvasTexture}
     */
    width?: number
  }

  /**
   * An interface for return values of the {@link ImageHelper.createThumbnail}
   * method.
   */
  interface ThumbnailReturn {
    /**
     * The height of the {@link PIXI.Sprite}, created by
     * {@link ImageHelper.createThumbnail}
     */
    height: number

    /**
     * The originally passed `string` URL or {@link PIXI.DisplayObject}
     * (type: `string | PIXI.DisplayObject`)
     */
    src: string | PIXI.DisplayObject

    /**
     * The {@link PIXI.Texture}, returned from
     * {@link ImageHelper.compositeCanvasTexture}, with `destroy(true)` already
     * called on it.
     * (type: `PIXI.Texture`)
     */
    texture: PIXI.Texture

    /**
     * The base64 encoded image data, returned from
     * {@link ImageHelper.textureToImage}
     */
    thumb: string

    /**
     * The width of the {@link PIXI.Sprite}, created by
     * {@link ImageHelper.createThumbnail}
     */
    width: number
  }
}