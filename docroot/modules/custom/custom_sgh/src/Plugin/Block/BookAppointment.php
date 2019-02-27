<?php

/*
 * @file
 * custom booking an appointment
 */

namespace Drupal\custom_sgh\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Hello' Block.
 *
 * @Block(
 *   id = "book_appointment",
 *   admin_label = @Translation("Book an appointment"),
 *   category = @Translation("Book an appointment"),
 * )
 */
class BookAppointment extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {

    $output = '';
    $webform = \Drupal::entityTypeManager()->getStorage('webform')->load('book_an_appointment');


    $webform = $webform->getSubmissionForm();
    $webform = drupal_render($webform);
    $output .= $webform;


    $build['output'] = [
        '#type' => 'inline_template',
        '#template' => $output,
    ];

    return $build;
  }

}
