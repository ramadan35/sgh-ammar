<?php

namespace Drupal\custom_header_image\Entity;

use Drupal\Core\Config\Entity\ConfigEntityInterface;

/**
 * Provides an interface for defining Header image entities.
 */
interface HeaderImageInterface extends ConfigEntityInterface {

  /**
   * Determine if there is a header image.
   *
   * @return bool
   */
  public function hasHeaderImage();

  /**
   * Get the associated file id.
   *
   * @return integer
   */
  public function getHeaderImageId();

  /**
   * Get the file representing the header image.
   *
   * @return \Drupal\file\Entity\File
   */
  public function getHeaderImage();

  /**
   * Get the associated image style id.
   *
   * @return string
   */
  public function getImageStyleId();

  /**
   * Determine if there is an associated image style.
   *
   * @return bool
   */
  public function hasImageStyle();

  /**
   * Get the image style entity.
   *
   * @return \Drupal\image\ImageStyleInterface
   */
  public function getImageStyle();

  /**
   * Determine if alt text was entered for this entity.
   *
   * @return bool
   */
  public function hasAltText();

  /**
   * Retrieve the alt text of the header image.
   *
   * @return string
   */
  public function getAltText();

  /**
   * Gets the paths the image header is associated with.
   *
   * @return string[]
   */
  public function getPaths();

  /**
   * Implode the paths into a single hard return delimited string.
   *
   * @return string
   */
  public function getPathsString();

}
