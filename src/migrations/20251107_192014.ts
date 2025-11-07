import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_cta_buttons_variant" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_cta_layout" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum_pages_blocks_cta_cta_type" AS ENUM('form', 'buttons');
  CREATE TYPE "public"."enum_pages_blocks_cta_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_content_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_media_block_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_pages_blocks_archive_relation_to" AS ENUM('blogs');
  CREATE TYPE "public"."enum_pages_blocks_archive_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_form_block_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_faq_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_team_members_social_links_platform" AS ENUM('linkedin', 'twitter', 'dribbble');
  CREATE TYPE "public"."enum_pages_blocks_team_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_pricing_table_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_two_column_layout_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_two_column_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_two_column_layout_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_course_ovr_blck__grid_ftr_btn_var" AS ENUM('link', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_feature_grid_bottom_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_feature_grid_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_pages_blocks_feature_grid_item_type" AS ENUM('icon', 'image');
  CREATE TYPE "public"."enum_pages_blocks_feature_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_header_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt');
  CREATE TYPE "public"."enum_pages_blocks_header_layout" AS ENUM('split', 'fullscreen', 'simple');
  CREATE TYPE "public"."enum_pages_blocks_header_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_header_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_gallery_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_pages_blocks_gallery_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_contact_info_methods_icon" AS ENUM('email', 'phone', 'location');
  CREATE TYPE "public"."enum_pages_blocks_contact_info_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_blog_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_blog_grid_collection_type" AS ENUM('blogs', 'courses');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_blog_grid_blog_source" AS ENUM('latest', 'featured', 'category');
  CREATE TYPE "public"."enum_pages_blocks_dynamic_blog_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout10_block_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt', 'tertiary', 'ghost', 'link', 'link-alt');
  CREATE TYPE "public"."enum_pages_blocks_layout10_block_buttons_size" AS ENUM('primary', 'sm', 'icon');
  CREATE TYPE "public"."enum_pages_blocks_layout245_block_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt', 'tertiary', 'ghost', 'link', 'link-alt');
  CREATE TYPE "public"."enum_pages_blocks_layout245_block_buttons_size" AS ENUM('primary', 'sm', 'icon');
  CREATE TYPE "public"."enum_pages_blocks_layout216_block_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt', 'tertiary', 'ghost', 'link', 'link-alt');
  CREATE TYPE "public"."enum_pages_blocks_layout216_block_buttons_size" AS ENUM('primary', 'sm', 'icon');
  CREATE TYPE "public"."enum_pages_blocks_layout13_block_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt', 'tertiary', 'ghost', 'link', 'link-alt');
  CREATE TYPE "public"."enum_pages_blocks_layout13_block_buttons_size" AS ENUM('primary', 'sm', 'icon');
  CREATE TYPE "public"."enum_bph_social_links_platform" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_buttons_variant" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_layout" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_cta_type" AS ENUM('form', 'buttons');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_content_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_media_block_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_relation_to" AS ENUM('blogs');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_form_block_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_team_members_social_links_platform" AS ENUM('linkedin', 'twitter', 'dribbble');
  CREATE TYPE "public"."enum__pages_v_blocks_team_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing_table_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_two_column_layout_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_two_column_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_two_column_layout_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_grid_bottom_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_grid_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_grid_item_type" AS ENUM('icon', 'image');
  CREATE TYPE "public"."enum__pages_v_blocks_feature_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_header_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt');
  CREATE TYPE "public"."enum__pages_v_blocks_header_layout" AS ENUM('split', 'fullscreen', 'simple');
  CREATE TYPE "public"."enum__pages_v_blocks_header_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_header_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_contact_info_methods_icon" AS ENUM('email', 'phone', 'location');
  CREATE TYPE "public"."enum__pages_v_blocks_contact_info_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_blog_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_blog_grid_collection_type" AS ENUM('blogs', 'courses');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_blog_grid_blog_source" AS ENUM('latest', 'featured', 'category');
  CREATE TYPE "public"."enum__pages_v_blocks_dynamic_blog_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout10_block_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt', 'tertiary', 'ghost', 'link', 'link-alt');
  CREATE TYPE "public"."enum__pages_v_blocks_layout10_block_buttons_size" AS ENUM('primary', 'sm', 'icon');
  CREATE TYPE "public"."enum__pages_v_blocks_layout245_block_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt', 'tertiary', 'ghost', 'link', 'link-alt');
  CREATE TYPE "public"."enum__pages_v_blocks_layout245_block_buttons_size" AS ENUM('primary', 'sm', 'icon');
  CREATE TYPE "public"."enum__pages_v_blocks_layout216_block_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt', 'tertiary', 'ghost', 'link', 'link-alt');
  CREATE TYPE "public"."enum__pages_v_blocks_layout216_block_buttons_size" AS ENUM('primary', 'sm', 'icon');
  CREATE TYPE "public"."enum__pages_v_blocks_layout13_block_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt', 'tertiary', 'ghost', 'link', 'link-alt');
  CREATE TYPE "public"."enum__pages_v_blocks_layout13_block_buttons_size" AS ENUM('primary', 'sm', 'icon');
  CREATE TYPE "public"."enum__bph_social_links_v_platform" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_blogs_blocks_cta_buttons_variant" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_blogs_blocks_cta_layout" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum_blogs_blocks_cta_cta_type" AS ENUM('form', 'buttons');
  CREATE TYPE "public"."enum_blogs_blocks_cta_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blogs_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_blogs_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_blogs_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_blogs_blocks_content_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blogs_blocks_media_block_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blogs_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_blogs_blocks_archive_relation_to" AS ENUM('blogs');
  CREATE TYPE "public"."enum_blogs_blocks_archive_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blogs_blocks_form_block_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blogs_blocks_faq_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blogs_blocks_team_members_social_links_platform" AS ENUM('linkedin', 'twitter', 'dribbble');
  CREATE TYPE "public"."enum_blogs_blocks_team_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blogs_blocks_testimonials_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blogs_blocks_pricing_table_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blogs_blocks_two_column_layout_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_blogs_blocks_two_column_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_blogs_blocks_two_column_layout_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blogs_blocks_feature_grid_bottom_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_blogs_blocks_feature_grid_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_blogs_blocks_feature_grid_item_type" AS ENUM('icon', 'image');
  CREATE TYPE "public"."enum_blogs_blocks_feature_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blogs_blocks_header_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt');
  CREATE TYPE "public"."enum_blogs_blocks_header_layout" AS ENUM('split', 'fullscreen', 'simple');
  CREATE TYPE "public"."enum_blogs_blocks_header_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_blogs_blocks_header_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blogs_blocks_gallery_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_blogs_blocks_gallery_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blogs_blocks_contact_info_methods_icon" AS ENUM('email', 'phone', 'location');
  CREATE TYPE "public"."enum_blogs_blocks_contact_info_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blogs_blocks_blog_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blogs_blocks_dynamic_blog_grid_collection_type" AS ENUM('blogs', 'courses');
  CREATE TYPE "public"."enum_blogs_blocks_dynamic_blog_grid_blog_source" AS ENUM('latest', 'featured', 'category');
  CREATE TYPE "public"."enum_blogs_blocks_dynamic_blog_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blogs_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__blogs_v_blocks_cta_buttons_variant" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__blogs_v_blocks_cta_layout" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum__blogs_v_blocks_cta_cta_type" AS ENUM('form', 'buttons');
  CREATE TYPE "public"."enum__blogs_v_blocks_cta_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__blogs_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__blogs_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__blogs_v_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__blogs_v_blocks_content_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__blogs_v_blocks_media_block_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__blogs_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__blogs_v_blocks_archive_relation_to" AS ENUM('blogs');
  CREATE TYPE "public"."enum__blogs_v_blocks_archive_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__blogs_v_blocks_form_block_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__blogs_v_blocks_faq_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__blogs_v_blocks_team_members_social_links_platform" AS ENUM('linkedin', 'twitter', 'dribbble');
  CREATE TYPE "public"."enum__blogs_v_blocks_team_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__blogs_v_blocks_testimonials_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__blogs_v_blocks_pricing_table_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__blogs_v_blocks_two_column_layout_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__blogs_v_blocks_two_column_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__blogs_v_blocks_two_column_layout_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__blogs_v_blocks_feature_grid_bottom_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__blogs_v_blocks_feature_grid_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__blogs_v_blocks_feature_grid_item_type" AS ENUM('icon', 'image');
  CREATE TYPE "public"."enum__blogs_v_blocks_feature_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__blogs_v_blocks_header_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt');
  CREATE TYPE "public"."enum__blogs_v_blocks_header_layout" AS ENUM('split', 'fullscreen', 'simple');
  CREATE TYPE "public"."enum__blogs_v_blocks_header_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__blogs_v_blocks_header_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__blogs_v_blocks_gallery_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__blogs_v_blocks_gallery_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__blogs_v_blocks_contact_info_methods_icon" AS ENUM('email', 'phone', 'location');
  CREATE TYPE "public"."enum__blogs_v_blocks_contact_info_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__blogs_v_blocks_blog_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__blogs_v_blocks_dynamic_blog_grid_collection_type" AS ENUM('blogs', 'courses');
  CREATE TYPE "public"."enum__blogs_v_blocks_dynamic_blog_grid_blog_source" AS ENUM('latest', 'featured', 'category');
  CREATE TYPE "public"."enum__blogs_v_blocks_dynamic_blog_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__blogs_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_courses_blocks_cta_buttons_variant" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_courses_blocks_cta_layout" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum_courses_blocks_cta_cta_type" AS ENUM('form', 'buttons');
  CREATE TYPE "public"."enum_courses_blocks_cta_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_courses_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_courses_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_courses_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_courses_blocks_content_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_courses_blocks_media_block_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_courses_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_courses_blocks_archive_relation_to" AS ENUM('blogs');
  CREATE TYPE "public"."enum_courses_blocks_archive_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_courses_blocks_form_block_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_courses_blocks_faq_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_courses_blocks_team_members_social_links_platform" AS ENUM('linkedin', 'twitter', 'dribbble');
  CREATE TYPE "public"."enum_courses_blocks_team_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_courses_blocks_testimonials_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_courses_blocks_pricing_table_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_courses_blocks_two_column_layout_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_courses_blocks_two_column_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_courses_blocks_two_column_layout_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_courses_blocks_feature_grid_bottom_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_courses_blocks_feature_grid_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_courses_blocks_feature_grid_item_type" AS ENUM('icon', 'image');
  CREATE TYPE "public"."enum_courses_blocks_feature_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_courses_blocks_header_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt');
  CREATE TYPE "public"."enum_courses_blocks_header_layout" AS ENUM('split', 'fullscreen', 'simple');
  CREATE TYPE "public"."enum_courses_blocks_header_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_courses_blocks_header_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_courses_blocks_gallery_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_courses_blocks_gallery_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_courses_blocks_contact_info_methods_icon" AS ENUM('email', 'phone', 'location');
  CREATE TYPE "public"."enum_courses_blocks_contact_info_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_courses_blocks_blog_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_courses_blocks_dynamic_blog_grid_collection_type" AS ENUM('blogs', 'courses');
  CREATE TYPE "public"."enum_courses_blocks_dynamic_blog_grid_blog_source" AS ENUM('latest', 'featured', 'category');
  CREATE TYPE "public"."enum_courses_blocks_dynamic_blog_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_courses_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__courses_v_blocks_cta_buttons_variant" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__courses_v_blocks_cta_layout" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum__courses_v_blocks_cta_cta_type" AS ENUM('form', 'buttons');
  CREATE TYPE "public"."enum__courses_v_blocks_cta_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__courses_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__courses_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__courses_v_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__courses_v_blocks_content_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__courses_v_blocks_media_block_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__courses_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__courses_v_blocks_archive_relation_to" AS ENUM('blogs');
  CREATE TYPE "public"."enum__courses_v_blocks_archive_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__courses_v_blocks_form_block_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__courses_v_blocks_faq_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__courses_v_blocks_team_members_social_links_platform" AS ENUM('linkedin', 'twitter', 'dribbble');
  CREATE TYPE "public"."enum__courses_v_blocks_team_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__courses_v_blocks_testimonials_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__courses_v_blocks_pricing_table_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__courses_v_blocks_two_column_layout_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__courses_v_blocks_two_column_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__courses_v_blocks_two_column_layout_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__courses_v_blocks_feature_grid_bottom_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__courses_v_blocks_feature_grid_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__courses_v_blocks_feature_grid_item_type" AS ENUM('icon', 'image');
  CREATE TYPE "public"."enum__courses_v_blocks_feature_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__courses_v_blocks_header_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt');
  CREATE TYPE "public"."enum__courses_v_blocks_header_layout" AS ENUM('split', 'fullscreen', 'simple');
  CREATE TYPE "public"."enum__courses_v_blocks_header_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__courses_v_blocks_header_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__courses_v_blocks_gallery_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum__courses_v_blocks_gallery_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__courses_v_blocks_contact_info_methods_icon" AS ENUM('email', 'phone', 'location');
  CREATE TYPE "public"."enum__courses_v_blocks_contact_info_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__courses_v_blocks_blog_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__courses_v_blocks_dynamic_blog_grid_collection_type" AS ENUM('blogs', 'courses');
  CREATE TYPE "public"."enum__courses_v_blocks_dynamic_blog_grid_blog_source" AS ENUM('latest', 'featured', 'category');
  CREATE TYPE "public"."enum__courses_v_blocks_dynamic_blog_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum__courses_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_header_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_action_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_action_buttons_variant" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_footer_link_sections_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_social_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum_footer_legal_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_color_scheme" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum_global_cta_buttons_variant" AS ENUM('default', 'secondary');
  CREATE TYPE "public"."enum_global_cta_layout" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum_global_cta_cta_type" AS ENUM('form', 'buttons');
  CREATE TYPE "public"."enum_global_cta_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blog_overview_blocks_cta_buttons_variant" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_blog_overview_blocks_cta_layout" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum_blog_overview_blocks_cta_cta_type" AS ENUM('form', 'buttons');
  CREATE TYPE "public"."enum_blog_overview_blocks_cta_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blog_overview_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_blog_overview_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_blog_overview_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_blog_overview_blocks_content_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blog_overview_blocks_media_block_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blog_overview_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_blog_overview_blocks_archive_relation_to" AS ENUM('blogs');
  CREATE TYPE "public"."enum_blog_overview_blocks_archive_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blog_overview_blocks_form_block_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blog_overview_blocks_faq_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blog_overview_blocks_team_members_social_links_platform" AS ENUM('linkedin', 'twitter', 'dribbble');
  CREATE TYPE "public"."enum_blog_overview_blocks_team_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blog_overview_blocks_testimonials_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blog_overview_blocks_pricing_table_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blog_overview_blocks_two_column_layout_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_blog_overview_blocks_two_column_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_blog_overview_blocks_two_column_layout_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blog_overview_blocks_feature_grid_bottom_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_blog_overview_blocks_feature_grid_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_blog_overview_blocks_feature_grid_item_type" AS ENUM('icon', 'image');
  CREATE TYPE "public"."enum_blog_overview_blocks_feature_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blog_overview_blocks_header_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt');
  CREATE TYPE "public"."enum_blog_overview_blocks_header_layout" AS ENUM('split', 'fullscreen', 'simple');
  CREATE TYPE "public"."enum_blog_overview_blocks_header_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_blog_overview_blocks_header_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blog_overview_blocks_gallery_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_blog_overview_blocks_gallery_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blog_overview_blocks_contact_info_methods_icon" AS ENUM('email', 'phone', 'location');
  CREATE TYPE "public"."enum_blog_overview_blocks_contact_info_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blog_overview_blocks_blog_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_blog_overview_blocks_dynamic_blog_grid_collection_type" AS ENUM('blogs', 'courses');
  CREATE TYPE "public"."enum_blog_overview_blocks_dynamic_blog_grid_blog_source" AS ENUM('latest', 'featured', 'category');
  CREATE TYPE "public"."enum_blog_overview_blocks_dynamic_blog_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_course_overview_blocks_cta_buttons_variant" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_course_overview_blocks_cta_layout" AS ENUM('split', 'centered');
  CREATE TYPE "public"."enum_course_overview_blocks_cta_cta_type" AS ENUM('form', 'buttons');
  CREATE TYPE "public"."enum_course_overview_blocks_cta_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_course_overview_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_course_overview_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_course_overview_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_course_overview_blocks_content_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_course_overview_blocks_media_block_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_course_overview_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_course_overview_blocks_archive_relation_to" AS ENUM('blogs');
  CREATE TYPE "public"."enum_course_overview_blocks_archive_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_course_overview_blocks_form_block_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_course_overview_blocks_faq_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_course_overview_blocks_team_members_social_links_platform" AS ENUM('linkedin', 'twitter', 'dribbble');
  CREATE TYPE "public"."enum_course_overview_blocks_team_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_course_overview_blocks_testimonials_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_course_overview_blocks_pricing_table_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_course_overview_blocks_two_column_layout_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_course_overview_blocks_two_column_layout_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_course_overview_blocks_two_column_layout_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_course_overview_blocks_feature_grid_bottom_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_course_overview_blocks_feature_grid_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_course_overview_blocks_feature_grid_item_type" AS ENUM('icon', 'image');
  CREATE TYPE "public"."enum_course_overview_blocks_feature_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_course_overview_blocks_header_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt');
  CREATE TYPE "public"."enum_course_overview_blocks_header_layout" AS ENUM('split', 'fullscreen', 'simple');
  CREATE TYPE "public"."enum_course_overview_blocks_header_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_course_overview_blocks_header_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_course_overview_blocks_gallery_columns" AS ENUM('2', '3', '4');
  CREATE TYPE "public"."enum_course_overview_blocks_gallery_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_course_overview_blocks_contact_info_methods_icon" AS ENUM('email', 'phone', 'location');
  CREATE TYPE "public"."enum_course_overview_blocks_contact_info_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_course_overview_blocks_blog_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TYPE "public"."enum_course_overview_blocks_dynamic_blog_grid_collection_type" AS ENUM('blogs', 'courses');
  CREATE TYPE "public"."enum_course_overview_blocks_dynamic_blog_grid_blog_source" AS ENUM('latest', 'featured', 'category');
  CREATE TYPE "public"."enum_course_overview_blocks_dynamic_blog_grid_color_scheme" AS ENUM('light', 'dark', 'primary', 'secondary', 'custom');
  CREATE TABLE "pages_blocks_cta_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum_pages_blocks_cta_buttons_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_pages_blocks_cta_layout" DEFAULT 'split',
  	"show_tagline" boolean DEFAULT false,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"cta_type" "enum_pages_blocks_cta_cta_type" DEFAULT 'form',
  	"form_id" integer,
  	"form_settings_form_placeholder" varchar DEFAULT 'Voer je e-mail in',
  	"form_settings_form_button_text" varchar DEFAULT 'Inschrijven',
  	"form_settings_terms_text" varchar DEFAULT 'U gaat akkoord met onze {privacyPolicy} en {termsLink}.',
  	"form_settings_terms_link" varchar DEFAULT '/terms',
  	"show_image" boolean DEFAULT true,
  	"image_id" integer,
  	"image_alt" varchar,
  	"color_scheme" "enum_pages_blocks_cta_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_pages_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_content_columns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color_scheme" "enum_pages_blocks_content_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"color_scheme" "enum_pages_blocks_media_block_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"populate_by" "enum_pages_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum_pages_blocks_archive_relation_to" DEFAULT 'blogs',
  	"limit" numeric DEFAULT 10,
  	"color_scheme" "enum_pages_blocks_archive_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"color_scheme" "enum_pages_blocks_form_block_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb
  );
  
  CREATE TABLE "pages_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_contact_section" boolean DEFAULT true,
  	"contact_section_contact_heading" varchar DEFAULT 'Heb je nog vragen?',
  	"contact_section_contact_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"contact_section_contact_button_text" varchar DEFAULT 'Contact',
  	"contact_section_contact_button_link" varchar DEFAULT '/contact',
  	"color_scheme" "enum_pages_blocks_faq_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_team_members_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_pages_blocks_team_members_social_links_platform",
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"title" varchar,
  	"description" varchar,
  	"avatar_id" integer
  );
  
  CREATE TABLE "pages_blocks_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Team',
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_hiring_section" boolean DEFAULT true,
  	"hiring_section_hiring_heading" varchar DEFAULT 'We werven!',
  	"hiring_section_hiring_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"hiring_section_hiring_button_text" varchar DEFAULT 'Open posities',
  	"hiring_section_hiring_button_link" varchar DEFAULT '/careers',
  	"color_scheme" "enum_pages_blocks_team_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_testimonials_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rating" numeric DEFAULT 5,
  	"quote" varchar,
  	"author_name" varchar,
  	"author_title" varchar,
  	"author_avatar_id" integer,
  	"company_logo_id" integer
  );
  
  CREATE TABLE "pages_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_stars" boolean DEFAULT true,
  	"color_scheme" "enum_pages_blocks_testimonials_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_pricing_table_plans_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature" varchar
  );
  
  CREATE TABLE "pages_blocks_pricing_table_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"monthly_price" varchar,
  	"yearly_price" varchar,
  	"button_text" varchar DEFAULT 'Aan de slag',
  	"button_link" varchar DEFAULT '/contact',
  	"is_popular" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_pricing_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Prijzen',
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_billing_toggle" boolean DEFAULT true,
  	"color_scheme" "enum_pages_blocks_pricing_table_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_two_column_layout_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum_pages_blocks_two_column_layout_buttons_variant" DEFAULT 'secondary'
  );
  
  CREATE TABLE "pages_blocks_two_column_layout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_position" "enum_pages_blocks_two_column_layout_image_position" DEFAULT 'right',
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"image_id" integer,
  	"image_alt" varchar,
  	"show_buttons" boolean DEFAULT true,
  	"color_scheme" "enum_pages_blocks_two_column_layout_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_feature_grid_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon_id" integer,
  	"image_id" integer,
  	"image_alt" varchar,
  	"show_button" boolean DEFAULT false,
  	"button_text" varchar,
  	"button_link" varchar,
  	"button_variant" "enum_course_ovr_blck__grid_ftr_btn_var" DEFAULT 'link'
  );
  
  CREATE TABLE "pages_blocks_feature_grid_bottom_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum_pages_blocks_feature_grid_bottom_buttons_variant" DEFAULT 'secondary'
  );
  
  CREATE TABLE "pages_blocks_feature_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_pages_blocks_feature_grid_columns" DEFAULT '3',
  	"item_type" "enum_pages_blocks_feature_grid_item_type" DEFAULT 'icon',
  	"show_header_section" boolean DEFAULT true,
  	"header_section_tagline" varchar,
  	"header_section_heading" varchar,
  	"header_section_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_item_buttons" boolean DEFAULT true,
  	"show_bottom_buttons" boolean DEFAULT false,
  	"color_scheme" "enum_pages_blocks_feature_grid_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_header_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum_pages_blocks_header_buttons_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE "pages_blocks_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_pages_blocks_header_layout" DEFAULT 'split',
  	"image_position" "enum_pages_blocks_header_image_position" DEFAULT 'right',
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_image" boolean DEFAULT true,
  	"image_id" integer,
  	"image_alt" varchar,
  	"show_overlay" boolean DEFAULT true,
  	"overlay_opacity" numeric DEFAULT 0.5,
  	"show_buttons" boolean DEFAULT true,
  	"color_scheme" "enum_pages_blocks_header_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar,
  	"link" varchar
  );
  
  CREATE TABLE "pages_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_pages_blocks_gallery_columns" DEFAULT '4',
  	"show_heading" boolean DEFAULT true,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"color_scheme" "enum_pages_blocks_gallery_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_contact_info_methods" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_contact_info_methods_icon" DEFAULT 'email',
  	"title" varchar,
  	"description" varchar,
  	"link_text" varchar,
  	"link_href" varchar
  );
  
  CREATE TABLE "pages_blocks_contact_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color_scheme" "enum_pages_blocks_contact_info_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_blog_grid_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"category" varchar
  );
  
  CREATE TABLE "pages_blocks_blog_grid_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"excerpt" varchar,
  	"category" varchar,
  	"read_time" varchar DEFAULT '5 min read',
  	"image_id" integer,
  	"image_alt" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_blog_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_categories" boolean DEFAULT false,
  	"color_scheme" "enum_pages_blocks_blog_grid_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_dynamic_blog_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"collection_type" "enum_pages_blocks_dynamic_blog_grid_collection_type" DEFAULT 'blogs',
  	"blog_source" "enum_pages_blocks_dynamic_blog_grid_blog_source" DEFAULT 'latest',
  	"category_filter_id" integer,
  	"limit" numeric DEFAULT 9,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar DEFAULT 'Ontdek onze blogs',
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_categories" boolean DEFAULT false,
  	"color_scheme" "enum_pages_blocks_dynamic_blog_grid_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_logo_list_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_id" integer
  );
  
  CREATE TABLE "pages_blocks_logo_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Used by the world''s leading companies',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_layout90_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_layout10_block_sub_headings" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_layout10_block_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"href" varchar,
  	"variant" "enum_pages_blocks_layout10_block_buttons_variant" DEFAULT 'primary',
  	"size" "enum_pages_blocks_layout10_block_buttons_size" DEFAULT 'primary',
  	"show_icon" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_layout10_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_layout102_block_sub_headings" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE "pages_blocks_layout102_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_layout245_block_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"heading" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_layout245_block_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"href" varchar,
  	"variant" "enum_pages_blocks_layout245_block_buttons_variant" DEFAULT 'primary',
  	"size" "enum_pages_blocks_layout245_block_buttons_size" DEFAULT 'primary',
  	"show_icon" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_layout245_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_layout216_block_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_layout216_block_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"href" varchar,
  	"variant" "enum_pages_blocks_layout216_block_buttons_variant" DEFAULT 'primary',
  	"size" "enum_pages_blocks_layout216_block_buttons_size" DEFAULT 'primary',
  	"show_icon" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_layout216_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_layout18_block_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"paragraph" varchar
  );
  
  CREATE TABLE "pages_blocks_layout18_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_layout13_block_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_id" integer
  );
  
  CREATE TABLE "pages_blocks_layout13_block_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"href" varchar,
  	"variant" "enum_pages_blocks_layout13_block_buttons_variant" DEFAULT 'primary',
  	"size" "enum_pages_blocks_layout13_block_buttons_size" DEFAULT 'primary',
  	"show_icon" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_layout13_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_blog_post_header_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"url" varchar
  );
  
  CREATE TABLE "bph_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_bph_social_links_platform",
  	"url" varchar
  );
  
  CREATE TABLE "pages_blocks_blog_post_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"image_id" integer,
  	"author_full_name" varchar,
  	"author_date" timestamp(3) with time zone,
  	"author_read_time" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"blogs_id" integer,
  	"courses_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "_pages_v_blocks_cta_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum__pages_v_blocks_cta_buttons_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout" "enum__pages_v_blocks_cta_layout" DEFAULT 'split',
  	"show_tagline" boolean DEFAULT false,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"cta_type" "enum__pages_v_blocks_cta_cta_type" DEFAULT 'form',
  	"form_id" integer,
  	"form_settings_form_placeholder" varchar DEFAULT 'Voer je e-mail in',
  	"form_settings_form_button_text" varchar DEFAULT 'Inschrijven',
  	"form_settings_terms_text" varchar DEFAULT 'U gaat akkoord met onze {privacyPolicy} en {termsLink}.',
  	"form_settings_terms_link" varchar DEFAULT '/terms',
  	"show_image" boolean DEFAULT true,
  	"image_id" integer,
  	"image_alt" varchar,
  	"color_scheme" "enum__pages_v_blocks_cta_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__pages_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__pages_v_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_content_columns_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color_scheme" "enum__pages_v_blocks_content_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"color_scheme" "enum__pages_v_blocks_media_block_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_content" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"populate_by" "enum__pages_v_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum__pages_v_blocks_archive_relation_to" DEFAULT 'blogs',
  	"limit" numeric DEFAULT 10,
  	"color_scheme" "enum__pages_v_blocks_archive_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"color_scheme" "enum__pages_v_blocks_form_block_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_contact_section" boolean DEFAULT true,
  	"contact_section_contact_heading" varchar DEFAULT 'Heb je nog vragen?',
  	"contact_section_contact_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"contact_section_contact_button_text" varchar DEFAULT 'Contact',
  	"contact_section_contact_button_link" varchar DEFAULT '/contact',
  	"color_scheme" "enum__pages_v_blocks_faq_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_team_members_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__pages_v_blocks_team_members_social_links_platform",
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"title" varchar,
  	"description" varchar,
  	"avatar_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Team',
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_hiring_section" boolean DEFAULT true,
  	"hiring_section_hiring_heading" varchar DEFAULT 'We werven!',
  	"hiring_section_hiring_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"hiring_section_hiring_button_text" varchar DEFAULT 'Open posities',
  	"hiring_section_hiring_button_link" varchar DEFAULT '/careers',
  	"color_scheme" "enum__pages_v_blocks_team_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rating" numeric DEFAULT 5,
  	"quote" varchar,
  	"author_name" varchar,
  	"author_title" varchar,
  	"author_avatar_id" integer,
  	"company_logo_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_stars" boolean DEFAULT true,
  	"color_scheme" "enum__pages_v_blocks_testimonials_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_table_plans_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"feature" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_table_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"monthly_price" varchar,
  	"yearly_price" varchar,
  	"button_text" varchar DEFAULT 'Aan de slag',
  	"button_link" varchar DEFAULT '/contact',
  	"is_popular" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Prijzen',
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_billing_toggle" boolean DEFAULT true,
  	"color_scheme" "enum__pages_v_blocks_pricing_table_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_two_column_layout_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum__pages_v_blocks_two_column_layout_buttons_variant" DEFAULT 'secondary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_two_column_layout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_position" "enum__pages_v_blocks_two_column_layout_image_position" DEFAULT 'right',
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"image_id" integer,
  	"image_alt" varchar,
  	"show_buttons" boolean DEFAULT true,
  	"color_scheme" "enum__pages_v_blocks_two_column_layout_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_grid_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon_id" integer,
  	"image_id" integer,
  	"image_alt" varchar,
  	"show_button" boolean DEFAULT false,
  	"button_text" varchar,
  	"button_link" varchar,
  	"button_variant" "enum_course_ovr_blck__grid_ftr_btn_var" DEFAULT 'link',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_grid_bottom_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum__pages_v_blocks_feature_grid_bottom_buttons_variant" DEFAULT 'secondary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"columns" "enum__pages_v_blocks_feature_grid_columns" DEFAULT '3',
  	"item_type" "enum__pages_v_blocks_feature_grid_item_type" DEFAULT 'icon',
  	"show_header_section" boolean DEFAULT true,
  	"header_section_tagline" varchar,
  	"header_section_heading" varchar,
  	"header_section_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_item_buttons" boolean DEFAULT true,
  	"show_bottom_buttons" boolean DEFAULT false,
  	"color_scheme" "enum__pages_v_blocks_feature_grid_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_header_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum__pages_v_blocks_header_buttons_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout" "enum__pages_v_blocks_header_layout" DEFAULT 'split',
  	"image_position" "enum__pages_v_blocks_header_image_position" DEFAULT 'right',
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_image" boolean DEFAULT true,
  	"image_id" integer,
  	"image_alt" varchar,
  	"show_overlay" boolean DEFAULT true,
  	"overlay_opacity" numeric DEFAULT 0.5,
  	"show_buttons" boolean DEFAULT true,
  	"color_scheme" "enum__pages_v_blocks_header_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"columns" "enum__pages_v_blocks_gallery_columns" DEFAULT '4',
  	"show_heading" boolean DEFAULT true,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"color_scheme" "enum__pages_v_blocks_gallery_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_contact_info_methods" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_contact_info_methods_icon" DEFAULT 'email',
  	"title" varchar,
  	"description" varchar,
  	"link_text" varchar,
  	"link_href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_contact_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color_scheme" "enum__pages_v_blocks_contact_info_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog_grid_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"category" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog_grid_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"excerpt" varchar,
  	"category" varchar,
  	"read_time" varchar DEFAULT '5 min read',
  	"image_id" integer,
  	"image_alt" varchar,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_categories" boolean DEFAULT false,
  	"color_scheme" "enum__pages_v_blocks_blog_grid_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_dynamic_blog_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"collection_type" "enum__pages_v_blocks_dynamic_blog_grid_collection_type" DEFAULT 'blogs',
  	"blog_source" "enum__pages_v_blocks_dynamic_blog_grid_blog_source" DEFAULT 'latest',
  	"category_filter_id" integer,
  	"limit" numeric DEFAULT 9,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar DEFAULT 'Ontdek onze blogs',
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_categories" boolean DEFAULT false,
  	"color_scheme" "enum__pages_v_blocks_dynamic_blog_grid_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_logo_list_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_logo_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Used by the world''s leading companies',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout90_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout10_block_sub_headings" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout10_block_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"href" varchar,
  	"variant" "enum__pages_v_blocks_layout10_block_buttons_variant" DEFAULT 'primary',
  	"size" "enum__pages_v_blocks_layout10_block_buttons_size" DEFAULT 'primary',
  	"show_icon" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout10_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout102_block_sub_headings" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout102_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout245_block_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"heading" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout245_block_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"href" varchar,
  	"variant" "enum__pages_v_blocks_layout245_block_buttons_variant" DEFAULT 'primary',
  	"size" "enum__pages_v_blocks_layout245_block_buttons_size" DEFAULT 'primary',
  	"show_icon" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout245_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout216_block_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout216_block_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"href" varchar,
  	"variant" "enum__pages_v_blocks_layout216_block_buttons_variant" DEFAULT 'primary',
  	"size" "enum__pages_v_blocks_layout216_block_buttons_size" DEFAULT 'primary',
  	"show_icon" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout216_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout18_block_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"paragraph" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout18_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout13_block_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout13_block_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"href" varchar,
  	"variant" "enum__pages_v_blocks_layout13_block_buttons_variant" DEFAULT 'primary',
  	"size" "enum__pages_v_blocks_layout13_block_buttons_size" DEFAULT 'primary',
  	"show_icon" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout13_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog_post_header_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_bph_social_links_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__bph_social_links_v_platform",
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog_post_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"image_id" integer,
  	"author_full_name" varchar,
  	"author_date" timestamp(3) with time zone,
  	"author_read_time" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"blogs_id" integer,
  	"courses_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "blogs_blocks_cta_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum_blogs_blocks_cta_buttons_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE "blogs_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_blogs_blocks_cta_layout" DEFAULT 'split',
  	"show_tagline" boolean DEFAULT false,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"cta_type" "enum_blogs_blocks_cta_cta_type" DEFAULT 'form',
  	"form_id" integer,
  	"form_settings_form_placeholder" varchar DEFAULT 'Voer je e-mail in',
  	"form_settings_form_button_text" varchar DEFAULT 'Inschrijven',
  	"form_settings_terms_text" varchar DEFAULT 'U gaat akkoord met onze {privacyPolicy} en {termsLink}.',
  	"form_settings_terms_link" varchar DEFAULT '/terms',
  	"show_image" boolean DEFAULT true,
  	"image_id" integer,
  	"image_alt" varchar,
  	"color_scheme" "enum_blogs_blocks_cta_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "blogs_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_blogs_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_blogs_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_blogs_blocks_content_columns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "blogs_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color_scheme" "enum_blogs_blocks_content_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "blogs_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"color_scheme" "enum_blogs_blocks_media_block_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "blogs_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"populate_by" "enum_blogs_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum_blogs_blocks_archive_relation_to" DEFAULT 'blogs',
  	"limit" numeric DEFAULT 10,
  	"color_scheme" "enum_blogs_blocks_archive_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "blogs_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"color_scheme" "enum_blogs_blocks_form_block_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "blogs_blocks_faq_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb
  );
  
  CREATE TABLE "blogs_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_contact_section" boolean DEFAULT true,
  	"contact_section_contact_heading" varchar DEFAULT 'Heb je nog vragen?',
  	"contact_section_contact_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"contact_section_contact_button_text" varchar DEFAULT 'Contact',
  	"contact_section_contact_button_link" varchar DEFAULT '/contact',
  	"color_scheme" "enum_blogs_blocks_faq_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "blogs_blocks_team_members_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_blogs_blocks_team_members_social_links_platform",
  	"href" varchar
  );
  
  CREATE TABLE "blogs_blocks_team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"title" varchar,
  	"description" varchar,
  	"avatar_id" integer
  );
  
  CREATE TABLE "blogs_blocks_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Team',
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_hiring_section" boolean DEFAULT true,
  	"hiring_section_hiring_heading" varchar DEFAULT 'We werven!',
  	"hiring_section_hiring_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"hiring_section_hiring_button_text" varchar DEFAULT 'Open posities',
  	"hiring_section_hiring_button_link" varchar DEFAULT '/careers',
  	"color_scheme" "enum_blogs_blocks_team_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "blogs_blocks_testimonials_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rating" numeric DEFAULT 5,
  	"quote" varchar,
  	"author_name" varchar,
  	"author_title" varchar,
  	"author_avatar_id" integer,
  	"company_logo_id" integer
  );
  
  CREATE TABLE "blogs_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_stars" boolean DEFAULT true,
  	"color_scheme" "enum_blogs_blocks_testimonials_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "blogs_blocks_pricing_table_plans_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature" varchar
  );
  
  CREATE TABLE "blogs_blocks_pricing_table_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"monthly_price" varchar,
  	"yearly_price" varchar,
  	"button_text" varchar DEFAULT 'Aan de slag',
  	"button_link" varchar DEFAULT '/contact',
  	"is_popular" boolean DEFAULT false
  );
  
  CREATE TABLE "blogs_blocks_pricing_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Prijzen',
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_billing_toggle" boolean DEFAULT true,
  	"color_scheme" "enum_blogs_blocks_pricing_table_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "blogs_blocks_two_column_layout_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum_blogs_blocks_two_column_layout_buttons_variant" DEFAULT 'secondary'
  );
  
  CREATE TABLE "blogs_blocks_two_column_layout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_position" "enum_blogs_blocks_two_column_layout_image_position" DEFAULT 'right',
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"image_id" integer,
  	"image_alt" varchar,
  	"show_buttons" boolean DEFAULT true,
  	"color_scheme" "enum_blogs_blocks_two_column_layout_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "blogs_blocks_feature_grid_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon_id" integer,
  	"image_id" integer,
  	"image_alt" varchar,
  	"show_button" boolean DEFAULT false,
  	"button_text" varchar,
  	"button_link" varchar,
  	"button_variant" "enum_course_ovr_blck__grid_ftr_btn_var" DEFAULT 'link'
  );
  
  CREATE TABLE "blogs_blocks_feature_grid_bottom_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum_blogs_blocks_feature_grid_bottom_buttons_variant" DEFAULT 'secondary'
  );
  
  CREATE TABLE "blogs_blocks_feature_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_blogs_blocks_feature_grid_columns" DEFAULT '3',
  	"item_type" "enum_blogs_blocks_feature_grid_item_type" DEFAULT 'icon',
  	"show_header_section" boolean DEFAULT true,
  	"header_section_tagline" varchar,
  	"header_section_heading" varchar,
  	"header_section_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_item_buttons" boolean DEFAULT true,
  	"show_bottom_buttons" boolean DEFAULT false,
  	"color_scheme" "enum_blogs_blocks_feature_grid_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "blogs_blocks_header_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum_blogs_blocks_header_buttons_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE "blogs_blocks_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_blogs_blocks_header_layout" DEFAULT 'split',
  	"image_position" "enum_blogs_blocks_header_image_position" DEFAULT 'right',
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_image" boolean DEFAULT true,
  	"image_id" integer,
  	"image_alt" varchar,
  	"show_overlay" boolean DEFAULT true,
  	"overlay_opacity" numeric DEFAULT 0.5,
  	"show_buttons" boolean DEFAULT true,
  	"color_scheme" "enum_blogs_blocks_header_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "blogs_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar,
  	"link" varchar
  );
  
  CREATE TABLE "blogs_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_blogs_blocks_gallery_columns" DEFAULT '4',
  	"show_heading" boolean DEFAULT true,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"color_scheme" "enum_blogs_blocks_gallery_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "blogs_blocks_contact_info_methods" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_blogs_blocks_contact_info_methods_icon" DEFAULT 'email',
  	"title" varchar,
  	"description" varchar,
  	"link_text" varchar,
  	"link_href" varchar
  );
  
  CREATE TABLE "blogs_blocks_contact_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color_scheme" "enum_blogs_blocks_contact_info_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "blogs_blocks_blog_grid_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"category" varchar
  );
  
  CREATE TABLE "blogs_blocks_blog_grid_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"excerpt" varchar,
  	"category" varchar,
  	"read_time" varchar DEFAULT '5 min read',
  	"image_id" integer,
  	"image_alt" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "blogs_blocks_blog_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_categories" boolean DEFAULT false,
  	"color_scheme" "enum_blogs_blocks_blog_grid_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "blogs_blocks_dynamic_blog_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"collection_type" "enum_blogs_blocks_dynamic_blog_grid_collection_type" DEFAULT 'blogs',
  	"blog_source" "enum_blogs_blocks_dynamic_blog_grid_blog_source" DEFAULT 'latest',
  	"category_filter_id" integer,
  	"limit" numeric DEFAULT 9,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar DEFAULT 'Ontdek onze blogs',
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_categories" boolean DEFAULT false,
  	"color_scheme" "enum_blogs_blocks_dynamic_blog_grid_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "blogs_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE "blogs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"excerpt" varchar,
  	"featured" boolean DEFAULT false,
  	"read_time" varchar DEFAULT '5 min lezen',
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_blogs_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "blogs_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"blogs_id" integer,
  	"courses_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "_blogs_v_blocks_cta_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum__blogs_v_blocks_cta_buttons_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout" "enum__blogs_v_blocks_cta_layout" DEFAULT 'split',
  	"show_tagline" boolean DEFAULT false,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"cta_type" "enum__blogs_v_blocks_cta_cta_type" DEFAULT 'form',
  	"form_id" integer,
  	"form_settings_form_placeholder" varchar DEFAULT 'Voer je e-mail in',
  	"form_settings_form_button_text" varchar DEFAULT 'Inschrijven',
  	"form_settings_terms_text" varchar DEFAULT 'U gaat akkoord met onze {privacyPolicy} en {termsLink}.',
  	"form_settings_terms_link" varchar DEFAULT '/terms',
  	"show_image" boolean DEFAULT true,
  	"image_id" integer,
  	"image_alt" varchar,
  	"color_scheme" "enum__blogs_v_blocks_cta_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__blogs_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__blogs_v_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__blogs_v_blocks_content_columns_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color_scheme" "enum__blogs_v_blocks_content_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"color_scheme" "enum__blogs_v_blocks_media_block_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_content" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"populate_by" "enum__blogs_v_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum__blogs_v_blocks_archive_relation_to" DEFAULT 'blogs',
  	"limit" numeric DEFAULT 10,
  	"color_scheme" "enum__blogs_v_blocks_archive_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"color_scheme" "enum__blogs_v_blocks_form_block_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_faq_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_contact_section" boolean DEFAULT true,
  	"contact_section_contact_heading" varchar DEFAULT 'Heb je nog vragen?',
  	"contact_section_contact_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"contact_section_contact_button_text" varchar DEFAULT 'Contact',
  	"contact_section_contact_button_link" varchar DEFAULT '/contact',
  	"color_scheme" "enum__blogs_v_blocks_faq_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_team_members_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__blogs_v_blocks_team_members_social_links_platform",
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"title" varchar,
  	"description" varchar,
  	"avatar_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Team',
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_hiring_section" boolean DEFAULT true,
  	"hiring_section_hiring_heading" varchar DEFAULT 'We werven!',
  	"hiring_section_hiring_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"hiring_section_hiring_button_text" varchar DEFAULT 'Open posities',
  	"hiring_section_hiring_button_link" varchar DEFAULT '/careers',
  	"color_scheme" "enum__blogs_v_blocks_team_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_testimonials_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rating" numeric DEFAULT 5,
  	"quote" varchar,
  	"author_name" varchar,
  	"author_title" varchar,
  	"author_avatar_id" integer,
  	"company_logo_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_stars" boolean DEFAULT true,
  	"color_scheme" "enum__blogs_v_blocks_testimonials_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_pricing_table_plans_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"feature" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_pricing_table_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"monthly_price" varchar,
  	"yearly_price" varchar,
  	"button_text" varchar DEFAULT 'Aan de slag',
  	"button_link" varchar DEFAULT '/contact',
  	"is_popular" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_pricing_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Prijzen',
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_billing_toggle" boolean DEFAULT true,
  	"color_scheme" "enum__blogs_v_blocks_pricing_table_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_two_column_layout_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum__blogs_v_blocks_two_column_layout_buttons_variant" DEFAULT 'secondary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_two_column_layout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_position" "enum__blogs_v_blocks_two_column_layout_image_position" DEFAULT 'right',
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"image_id" integer,
  	"image_alt" varchar,
  	"show_buttons" boolean DEFAULT true,
  	"color_scheme" "enum__blogs_v_blocks_two_column_layout_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_feature_grid_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon_id" integer,
  	"image_id" integer,
  	"image_alt" varchar,
  	"show_button" boolean DEFAULT false,
  	"button_text" varchar,
  	"button_link" varchar,
  	"button_variant" "enum_course_ovr_blck__grid_ftr_btn_var" DEFAULT 'link',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_feature_grid_bottom_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum__blogs_v_blocks_feature_grid_bottom_buttons_variant" DEFAULT 'secondary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_feature_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"columns" "enum__blogs_v_blocks_feature_grid_columns" DEFAULT '3',
  	"item_type" "enum__blogs_v_blocks_feature_grid_item_type" DEFAULT 'icon',
  	"show_header_section" boolean DEFAULT true,
  	"header_section_tagline" varchar,
  	"header_section_heading" varchar,
  	"header_section_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_item_buttons" boolean DEFAULT true,
  	"show_bottom_buttons" boolean DEFAULT false,
  	"color_scheme" "enum__blogs_v_blocks_feature_grid_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_header_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum__blogs_v_blocks_header_buttons_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout" "enum__blogs_v_blocks_header_layout" DEFAULT 'split',
  	"image_position" "enum__blogs_v_blocks_header_image_position" DEFAULT 'right',
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_image" boolean DEFAULT true,
  	"image_id" integer,
  	"image_alt" varchar,
  	"show_overlay" boolean DEFAULT true,
  	"overlay_opacity" numeric DEFAULT 0.5,
  	"show_buttons" boolean DEFAULT true,
  	"color_scheme" "enum__blogs_v_blocks_header_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"columns" "enum__blogs_v_blocks_gallery_columns" DEFAULT '4',
  	"show_heading" boolean DEFAULT true,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"color_scheme" "enum__blogs_v_blocks_gallery_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_contact_info_methods" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__blogs_v_blocks_contact_info_methods_icon" DEFAULT 'email',
  	"title" varchar,
  	"description" varchar,
  	"link_text" varchar,
  	"link_href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_contact_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color_scheme" "enum__blogs_v_blocks_contact_info_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_blog_grid_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"category" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_blog_grid_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"excerpt" varchar,
  	"category" varchar,
  	"read_time" varchar DEFAULT '5 min read',
  	"image_id" integer,
  	"image_alt" varchar,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_blog_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_categories" boolean DEFAULT false,
  	"color_scheme" "enum__blogs_v_blocks_blog_grid_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blogs_v_blocks_dynamic_blog_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"collection_type" "enum__blogs_v_blocks_dynamic_blog_grid_collection_type" DEFAULT 'blogs',
  	"blog_source" "enum__blogs_v_blocks_dynamic_blog_grid_blog_source" DEFAULT 'latest',
  	"category_filter_id" integer,
  	"limit" numeric DEFAULT 9,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar DEFAULT 'Ontdek onze blogs',
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_categories" boolean DEFAULT false,
  	"color_scheme" "enum__blogs_v_blocks_dynamic_blog_grid_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blogs_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE "_blogs_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_excerpt" varchar,
  	"version_featured" boolean DEFAULT false,
  	"version_read_time" varchar DEFAULT '5 min lezen',
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__blogs_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_blogs_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"blogs_id" integer,
  	"courses_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "courses_blocks_cta_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum_courses_blocks_cta_buttons_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE "courses_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_courses_blocks_cta_layout" DEFAULT 'split',
  	"show_tagline" boolean DEFAULT false,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"cta_type" "enum_courses_blocks_cta_cta_type" DEFAULT 'form',
  	"form_id" integer,
  	"form_settings_form_placeholder" varchar DEFAULT 'Voer je e-mail in',
  	"form_settings_form_button_text" varchar DEFAULT 'Inschrijven',
  	"form_settings_terms_text" varchar DEFAULT 'U gaat akkoord met onze {privacyPolicy} en {termsLink}.',
  	"form_settings_terms_link" varchar DEFAULT '/terms',
  	"show_image" boolean DEFAULT true,
  	"image_id" integer,
  	"image_alt" varchar,
  	"color_scheme" "enum_courses_blocks_cta_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "courses_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_courses_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_courses_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_courses_blocks_content_columns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "courses_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color_scheme" "enum_courses_blocks_content_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "courses_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"color_scheme" "enum_courses_blocks_media_block_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "courses_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"populate_by" "enum_courses_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum_courses_blocks_archive_relation_to" DEFAULT 'blogs',
  	"limit" numeric DEFAULT 10,
  	"color_scheme" "enum_courses_blocks_archive_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "courses_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"color_scheme" "enum_courses_blocks_form_block_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "courses_blocks_faq_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb
  );
  
  CREATE TABLE "courses_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_contact_section" boolean DEFAULT true,
  	"contact_section_contact_heading" varchar DEFAULT 'Heb je nog vragen?',
  	"contact_section_contact_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"contact_section_contact_button_text" varchar DEFAULT 'Contact',
  	"contact_section_contact_button_link" varchar DEFAULT '/contact',
  	"color_scheme" "enum_courses_blocks_faq_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "courses_blocks_team_members_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_courses_blocks_team_members_social_links_platform",
  	"href" varchar
  );
  
  CREATE TABLE "courses_blocks_team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"title" varchar,
  	"description" varchar,
  	"avatar_id" integer
  );
  
  CREATE TABLE "courses_blocks_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Team',
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_hiring_section" boolean DEFAULT true,
  	"hiring_section_hiring_heading" varchar DEFAULT 'We werven!',
  	"hiring_section_hiring_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"hiring_section_hiring_button_text" varchar DEFAULT 'Open posities',
  	"hiring_section_hiring_button_link" varchar DEFAULT '/careers',
  	"color_scheme" "enum_courses_blocks_team_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "courses_blocks_testimonials_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rating" numeric DEFAULT 5,
  	"quote" varchar,
  	"author_name" varchar,
  	"author_title" varchar,
  	"author_avatar_id" integer,
  	"company_logo_id" integer
  );
  
  CREATE TABLE "courses_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_stars" boolean DEFAULT true,
  	"color_scheme" "enum_courses_blocks_testimonials_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "courses_blocks_pricing_table_plans_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature" varchar
  );
  
  CREATE TABLE "courses_blocks_pricing_table_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"monthly_price" varchar,
  	"yearly_price" varchar,
  	"button_text" varchar DEFAULT 'Aan de slag',
  	"button_link" varchar DEFAULT '/contact',
  	"is_popular" boolean DEFAULT false
  );
  
  CREATE TABLE "courses_blocks_pricing_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Prijzen',
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_billing_toggle" boolean DEFAULT true,
  	"color_scheme" "enum_courses_blocks_pricing_table_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "courses_blocks_two_column_layout_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum_courses_blocks_two_column_layout_buttons_variant" DEFAULT 'secondary'
  );
  
  CREATE TABLE "courses_blocks_two_column_layout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_position" "enum_courses_blocks_two_column_layout_image_position" DEFAULT 'right',
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"image_id" integer,
  	"image_alt" varchar,
  	"show_buttons" boolean DEFAULT true,
  	"color_scheme" "enum_courses_blocks_two_column_layout_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "courses_blocks_feature_grid_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon_id" integer,
  	"image_id" integer,
  	"image_alt" varchar,
  	"show_button" boolean DEFAULT false,
  	"button_text" varchar,
  	"button_link" varchar,
  	"button_variant" "enum_course_ovr_blck__grid_ftr_btn_var" DEFAULT 'link'
  );
  
  CREATE TABLE "courses_blocks_feature_grid_bottom_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum_courses_blocks_feature_grid_bottom_buttons_variant" DEFAULT 'secondary'
  );
  
  CREATE TABLE "courses_blocks_feature_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_courses_blocks_feature_grid_columns" DEFAULT '3',
  	"item_type" "enum_courses_blocks_feature_grid_item_type" DEFAULT 'icon',
  	"show_header_section" boolean DEFAULT true,
  	"header_section_tagline" varchar,
  	"header_section_heading" varchar,
  	"header_section_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_item_buttons" boolean DEFAULT true,
  	"show_bottom_buttons" boolean DEFAULT false,
  	"color_scheme" "enum_courses_blocks_feature_grid_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "courses_blocks_header_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum_courses_blocks_header_buttons_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE "courses_blocks_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_courses_blocks_header_layout" DEFAULT 'split',
  	"image_position" "enum_courses_blocks_header_image_position" DEFAULT 'right',
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_image" boolean DEFAULT true,
  	"image_id" integer,
  	"image_alt" varchar,
  	"show_overlay" boolean DEFAULT true,
  	"overlay_opacity" numeric DEFAULT 0.5,
  	"show_buttons" boolean DEFAULT true,
  	"color_scheme" "enum_courses_blocks_header_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "courses_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar,
  	"link" varchar
  );
  
  CREATE TABLE "courses_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_courses_blocks_gallery_columns" DEFAULT '4',
  	"show_heading" boolean DEFAULT true,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"color_scheme" "enum_courses_blocks_gallery_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "courses_blocks_contact_info_methods" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_courses_blocks_contact_info_methods_icon" DEFAULT 'email',
  	"title" varchar,
  	"description" varchar,
  	"link_text" varchar,
  	"link_href" varchar
  );
  
  CREATE TABLE "courses_blocks_contact_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color_scheme" "enum_courses_blocks_contact_info_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "courses_blocks_blog_grid_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"category" varchar
  );
  
  CREATE TABLE "courses_blocks_blog_grid_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"excerpt" varchar,
  	"category" varchar,
  	"read_time" varchar DEFAULT '5 min read',
  	"image_id" integer,
  	"image_alt" varchar,
  	"href" varchar
  );
  
  CREATE TABLE "courses_blocks_blog_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_categories" boolean DEFAULT false,
  	"color_scheme" "enum_courses_blocks_blog_grid_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "courses_blocks_dynamic_blog_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"collection_type" "enum_courses_blocks_dynamic_blog_grid_collection_type" DEFAULT 'blogs',
  	"blog_source" "enum_courses_blocks_dynamic_blog_grid_blog_source" DEFAULT 'latest',
  	"category_filter_id" integer,
  	"limit" numeric DEFAULT 9,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar DEFAULT 'Ontdek onze blogs',
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_categories" boolean DEFAULT false,
  	"color_scheme" "enum_courses_blocks_dynamic_blog_grid_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "courses_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE "courses" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"excerpt" varchar,
  	"featured" boolean DEFAULT false,
  	"read_time" varchar DEFAULT '5 min lezen',
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_courses_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "courses_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"blogs_id" integer,
  	"courses_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "_courses_v_blocks_cta_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum__courses_v_blocks_cta_buttons_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout" "enum__courses_v_blocks_cta_layout" DEFAULT 'split',
  	"show_tagline" boolean DEFAULT false,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"cta_type" "enum__courses_v_blocks_cta_cta_type" DEFAULT 'form',
  	"form_id" integer,
  	"form_settings_form_placeholder" varchar DEFAULT 'Voer je e-mail in',
  	"form_settings_form_button_text" varchar DEFAULT 'Inschrijven',
  	"form_settings_terms_text" varchar DEFAULT 'U gaat akkoord met onze {privacyPolicy} en {termsLink}.',
  	"form_settings_terms_link" varchar DEFAULT '/terms',
  	"show_image" boolean DEFAULT true,
  	"image_id" integer,
  	"image_alt" varchar,
  	"color_scheme" "enum__courses_v_blocks_cta_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__courses_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__courses_v_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__courses_v_blocks_content_columns_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color_scheme" "enum__courses_v_blocks_content_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"color_scheme" "enum__courses_v_blocks_media_block_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_content" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"populate_by" "enum__courses_v_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum__courses_v_blocks_archive_relation_to" DEFAULT 'blogs',
  	"limit" numeric DEFAULT 10,
  	"color_scheme" "enum__courses_v_blocks_archive_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"color_scheme" "enum__courses_v_blocks_form_block_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_faq_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_contact_section" boolean DEFAULT true,
  	"contact_section_contact_heading" varchar DEFAULT 'Heb je nog vragen?',
  	"contact_section_contact_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"contact_section_contact_button_text" varchar DEFAULT 'Contact',
  	"contact_section_contact_button_link" varchar DEFAULT '/contact',
  	"color_scheme" "enum__courses_v_blocks_faq_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_team_members_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__courses_v_blocks_team_members_social_links_platform",
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"title" varchar,
  	"description" varchar,
  	"avatar_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Team',
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_hiring_section" boolean DEFAULT true,
  	"hiring_section_hiring_heading" varchar DEFAULT 'We werven!',
  	"hiring_section_hiring_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"hiring_section_hiring_button_text" varchar DEFAULT 'Open posities',
  	"hiring_section_hiring_button_link" varchar DEFAULT '/careers',
  	"color_scheme" "enum__courses_v_blocks_team_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_testimonials_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rating" numeric DEFAULT 5,
  	"quote" varchar,
  	"author_name" varchar,
  	"author_title" varchar,
  	"author_avatar_id" integer,
  	"company_logo_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_stars" boolean DEFAULT true,
  	"color_scheme" "enum__courses_v_blocks_testimonials_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_pricing_table_plans_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"feature" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_pricing_table_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"monthly_price" varchar,
  	"yearly_price" varchar,
  	"button_text" varchar DEFAULT 'Aan de slag',
  	"button_link" varchar DEFAULT '/contact',
  	"is_popular" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_pricing_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Prijzen',
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_billing_toggle" boolean DEFAULT true,
  	"color_scheme" "enum__courses_v_blocks_pricing_table_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_two_column_layout_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum__courses_v_blocks_two_column_layout_buttons_variant" DEFAULT 'secondary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_two_column_layout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_position" "enum__courses_v_blocks_two_column_layout_image_position" DEFAULT 'right',
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"image_id" integer,
  	"image_alt" varchar,
  	"show_buttons" boolean DEFAULT true,
  	"color_scheme" "enum__courses_v_blocks_two_column_layout_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_feature_grid_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon_id" integer,
  	"image_id" integer,
  	"image_alt" varchar,
  	"show_button" boolean DEFAULT false,
  	"button_text" varchar,
  	"button_link" varchar,
  	"button_variant" "enum_course_ovr_blck__grid_ftr_btn_var" DEFAULT 'link',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_feature_grid_bottom_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum__courses_v_blocks_feature_grid_bottom_buttons_variant" DEFAULT 'secondary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_feature_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"columns" "enum__courses_v_blocks_feature_grid_columns" DEFAULT '3',
  	"item_type" "enum__courses_v_blocks_feature_grid_item_type" DEFAULT 'icon',
  	"show_header_section" boolean DEFAULT true,
  	"header_section_tagline" varchar,
  	"header_section_heading" varchar,
  	"header_section_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_item_buttons" boolean DEFAULT true,
  	"show_bottom_buttons" boolean DEFAULT false,
  	"color_scheme" "enum__courses_v_blocks_feature_grid_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_header_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum__courses_v_blocks_header_buttons_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout" "enum__courses_v_blocks_header_layout" DEFAULT 'split',
  	"image_position" "enum__courses_v_blocks_header_image_position" DEFAULT 'right',
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_image" boolean DEFAULT true,
  	"image_id" integer,
  	"image_alt" varchar,
  	"show_overlay" boolean DEFAULT true,
  	"overlay_opacity" numeric DEFAULT 0.5,
  	"show_buttons" boolean DEFAULT true,
  	"color_scheme" "enum__courses_v_blocks_header_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"columns" "enum__courses_v_blocks_gallery_columns" DEFAULT '4',
  	"show_heading" boolean DEFAULT true,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"color_scheme" "enum__courses_v_blocks_gallery_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_contact_info_methods" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__courses_v_blocks_contact_info_methods_icon" DEFAULT 'email',
  	"title" varchar,
  	"description" varchar,
  	"link_text" varchar,
  	"link_href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_contact_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color_scheme" "enum__courses_v_blocks_contact_info_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_blog_grid_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"category" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_blog_grid_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"excerpt" varchar,
  	"category" varchar,
  	"read_time" varchar DEFAULT '5 min read',
  	"image_id" integer,
  	"image_alt" varchar,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_blog_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_categories" boolean DEFAULT false,
  	"color_scheme" "enum__courses_v_blocks_blog_grid_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_courses_v_blocks_dynamic_blog_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"collection_type" "enum__courses_v_blocks_dynamic_blog_grid_collection_type" DEFAULT 'blogs',
  	"blog_source" "enum__courses_v_blocks_dynamic_blog_grid_blog_source" DEFAULT 'latest',
  	"category_filter_id" integer,
  	"limit" numeric DEFAULT 9,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar DEFAULT 'Ontdek onze blogs',
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_categories" boolean DEFAULT false,
  	"color_scheme" "enum__courses_v_blocks_dynamic_blog_grid_color_scheme" DEFAULT 'light',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_courses_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE "_courses_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_excerpt" varchar,
  	"version_featured" boolean DEFAULT false,
  	"version_read_time" varchar DEFAULT '5 min lezen',
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__courses_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_courses_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"blogs_id" integer,
  	"courses_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"caption" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_square_url" varchar,
  	"sizes_square_width" numeric,
  	"sizes_square_height" numeric,
  	"sizes_square_mime_type" varchar,
  	"sizes_square_filesize" numeric,
  	"sizes_square_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar,
  	"sizes_xlarge_url" varchar,
  	"sizes_xlarge_width" numeric,
  	"sizes_xlarge_height" numeric,
  	"sizes_xlarge_mime_type" varchar,
  	"sizes_xlarge_filesize" numeric,
  	"sizes_xlarge_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE "categories_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"blogs_id" integer,
  	"courses_id" integer
  );
  
  CREATE TABLE "forms_blocks_checkbox" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"default_value" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_country" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"message" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_number" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"placeholder" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_state" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar,
  	"subject" varchar DEFAULT 'You''ve received a new message.' NOT NULL,
  	"message" jsonb
  );
  
  CREATE TABLE "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"submit_button_label" varchar,
  	"confirmation_type" "enum_forms_confirmation_type" DEFAULT 'message',
  	"confirmation_message" jsonb,
  	"redirect_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "search_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"relation_to" varchar,
  	"category_i_d" varchar,
  	"title" varchar
  );
  
  CREATE TABLE "search" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"priority" numeric,
  	"slug" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "search_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"blogs_id" integer,
  	"courses_id" integer
  );
  
  CREATE TABLE "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"blogs_id" integer,
  	"courses_id" integer,
  	"media_id" integer,
  	"categories_id" integer,
  	"users_id" integer,
  	"redirects_id" integer,
  	"forms_id" integer,
  	"form_submissions_id" integer,
  	"search_id" integer,
  	"payload_jobs_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "header_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "header_action_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_action_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL,
  	"variant" "enum_header_action_buttons_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"blogs_id" integer,
  	"courses_id" integer
  );
  
  CREATE TABLE "footer_link_sections_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_link_sections_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "footer_link_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE "footer_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_footer_social_links_platform" NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "footer_legal_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_legal_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer NOT NULL,
  	"address" varchar DEFAULT 'Level 1, 12 Voorbeeldstraat, Amsterdam 1000 AB',
  	"phone" varchar DEFAULT '0800 123 4567',
  	"email" varchar DEFAULT 'info@example.com',
  	"copyright" varchar DEFAULT '© 2024 Relume. All rights reserved.',
  	"color_scheme" "enum_footer_color_scheme" DEFAULT 'light',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"blogs_id" integer,
  	"courses_id" integer
  );
  
  CREATE TABLE "global_cta_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum_global_cta_buttons_variant" DEFAULT 'default'
  );
  
  CREATE TABLE "global_cta" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"layout" "enum_global_cta_layout" DEFAULT 'split' NOT NULL,
  	"show_tagline" boolean DEFAULT false,
  	"tagline" varchar,
  	"heading" varchar DEFAULT 'Klaar om te beginnen?' NOT NULL,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"cta_type" "enum_global_cta_cta_type" DEFAULT 'form' NOT NULL,
  	"form_id" integer,
  	"form_settings_form_placeholder" varchar DEFAULT 'Voer je e-mail in',
  	"form_settings_form_button_text" varchar DEFAULT 'Inschrijven',
  	"show_image" boolean DEFAULT true,
  	"image_id" integer,
  	"image_alt" varchar,
  	"color_scheme" "enum_global_cta_color_scheme" DEFAULT 'light' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "blog_overview_blocks_cta_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum_blog_overview_blocks_cta_buttons_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE "blog_overview_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_blog_overview_blocks_cta_layout" DEFAULT 'split' NOT NULL,
  	"show_tagline" boolean DEFAULT false,
  	"tagline" varchar,
  	"heading" varchar NOT NULL,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"cta_type" "enum_blog_overview_blocks_cta_cta_type" DEFAULT 'form' NOT NULL,
  	"form_id" integer,
  	"form_settings_form_placeholder" varchar DEFAULT 'Voer je e-mail in',
  	"form_settings_form_button_text" varchar DEFAULT 'Inschrijven',
  	"form_settings_terms_text" varchar DEFAULT 'U gaat akkoord met onze {privacyPolicy} en {termsLink}.',
  	"form_settings_terms_link" varchar DEFAULT '/terms',
  	"show_image" boolean DEFAULT true,
  	"image_id" integer,
  	"image_alt" varchar,
  	"color_scheme" "enum_blog_overview_blocks_cta_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_overview_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_blog_overview_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_blog_overview_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_blog_overview_blocks_content_columns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "blog_overview_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color_scheme" "enum_blog_overview_blocks_content_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_overview_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer NOT NULL,
  	"color_scheme" "enum_blog_overview_blocks_media_block_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_overview_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"populate_by" "enum_blog_overview_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum_blog_overview_blocks_archive_relation_to" DEFAULT 'blogs',
  	"limit" numeric DEFAULT 10,
  	"color_scheme" "enum_blog_overview_blocks_archive_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_overview_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"enable_intro" boolean,
  	"intro_content" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"color_scheme" "enum_blog_overview_blocks_form_block_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_overview_blocks_faq_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" jsonb NOT NULL
  );
  
  CREATE TABLE "blog_overview_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_contact_section" boolean DEFAULT true,
  	"contact_section_contact_heading" varchar DEFAULT 'Heb je nog vragen?',
  	"contact_section_contact_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"contact_section_contact_button_text" varchar DEFAULT 'Contact',
  	"contact_section_contact_button_link" varchar DEFAULT '/contact',
  	"color_scheme" "enum_blog_overview_blocks_faq_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_overview_blocks_team_members_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_blog_overview_blocks_team_members_social_links_platform" NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "blog_overview_blocks_team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"avatar_id" integer NOT NULL
  );
  
  CREATE TABLE "blog_overview_blocks_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Team',
  	"heading" varchar NOT NULL,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_hiring_section" boolean DEFAULT true,
  	"hiring_section_hiring_heading" varchar DEFAULT 'We werven!',
  	"hiring_section_hiring_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"hiring_section_hiring_button_text" varchar DEFAULT 'Open posities',
  	"hiring_section_hiring_button_link" varchar DEFAULT '/careers',
  	"color_scheme" "enum_blog_overview_blocks_team_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_overview_blocks_testimonials_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rating" numeric DEFAULT 5 NOT NULL,
  	"quote" varchar NOT NULL,
  	"author_name" varchar NOT NULL,
  	"author_title" varchar NOT NULL,
  	"author_avatar_id" integer NOT NULL,
  	"company_logo_id" integer
  );
  
  CREATE TABLE "blog_overview_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_stars" boolean DEFAULT true,
  	"color_scheme" "enum_blog_overview_blocks_testimonials_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_overview_blocks_pricing_table_plans_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature" varchar NOT NULL
  );
  
  CREATE TABLE "blog_overview_blocks_pricing_table_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"monthly_price" varchar NOT NULL,
  	"yearly_price" varchar,
  	"button_text" varchar DEFAULT 'Aan de slag',
  	"button_link" varchar DEFAULT '/contact',
  	"is_popular" boolean DEFAULT false
  );
  
  CREATE TABLE "blog_overview_blocks_pricing_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Prijzen',
  	"heading" varchar NOT NULL,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_billing_toggle" boolean DEFAULT true,
  	"color_scheme" "enum_blog_overview_blocks_pricing_table_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_overview_blocks_two_column_layout_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum_blog_overview_blocks_two_column_layout_buttons_variant" DEFAULT 'secondary'
  );
  
  CREATE TABLE "blog_overview_blocks_two_column_layout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_position" "enum_blog_overview_blocks_two_column_layout_image_position" DEFAULT 'right' NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"image_id" integer NOT NULL,
  	"image_alt" varchar,
  	"show_buttons" boolean DEFAULT true,
  	"color_scheme" "enum_blog_overview_blocks_two_column_layout_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_overview_blocks_feature_grid_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"icon_id" integer,
  	"image_id" integer,
  	"image_alt" varchar NOT NULL,
  	"show_button" boolean DEFAULT false,
  	"button_text" varchar,
  	"button_link" varchar,
  	"button_variant" "enum_course_ovr_blck__grid_ftr_btn_var" DEFAULT 'link'
  );
  
  CREATE TABLE "blog_overview_blocks_feature_grid_bottom_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum_blog_overview_blocks_feature_grid_bottom_buttons_variant" DEFAULT 'secondary'
  );
  
  CREATE TABLE "blog_overview_blocks_feature_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_blog_overview_blocks_feature_grid_columns" DEFAULT '3' NOT NULL,
  	"item_type" "enum_blog_overview_blocks_feature_grid_item_type" DEFAULT 'icon' NOT NULL,
  	"show_header_section" boolean DEFAULT true,
  	"header_section_tagline" varchar,
  	"header_section_heading" varchar,
  	"header_section_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_item_buttons" boolean DEFAULT true,
  	"show_bottom_buttons" boolean DEFAULT false,
  	"color_scheme" "enum_blog_overview_blocks_feature_grid_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_overview_blocks_header_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum_blog_overview_blocks_header_buttons_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE "blog_overview_blocks_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_blog_overview_blocks_header_layout" DEFAULT 'split' NOT NULL,
  	"image_position" "enum_blog_overview_blocks_header_image_position" DEFAULT 'right',
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_image" boolean DEFAULT true,
  	"image_id" integer,
  	"image_alt" varchar,
  	"show_overlay" boolean DEFAULT true,
  	"overlay_opacity" numeric DEFAULT 0.5,
  	"show_buttons" boolean DEFAULT true,
  	"color_scheme" "enum_blog_overview_blocks_header_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_overview_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"alt" varchar NOT NULL,
  	"link" varchar
  );
  
  CREATE TABLE "blog_overview_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_blog_overview_blocks_gallery_columns" DEFAULT '4' NOT NULL,
  	"show_heading" boolean DEFAULT true,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"color_scheme" "enum_blog_overview_blocks_gallery_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_overview_blocks_contact_info_methods" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_blog_overview_blocks_contact_info_methods_icon" DEFAULT 'email' NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"link_text" varchar NOT NULL,
  	"link_href" varchar NOT NULL
  );
  
  CREATE TABLE "blog_overview_blocks_contact_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color_scheme" "enum_blog_overview_blocks_contact_info_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_overview_blocks_blog_grid_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"category" varchar
  );
  
  CREATE TABLE "blog_overview_blocks_blog_grid_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"excerpt" varchar NOT NULL,
  	"category" varchar NOT NULL,
  	"read_time" varchar DEFAULT '5 min read' NOT NULL,
  	"image_id" integer NOT NULL,
  	"image_alt" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "blog_overview_blocks_blog_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar NOT NULL,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_categories" boolean DEFAULT false,
  	"color_scheme" "enum_blog_overview_blocks_blog_grid_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_overview_blocks_dynamic_blog_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"collection_type" "enum_blog_overview_blocks_dynamic_blog_grid_collection_type" DEFAULT 'blogs' NOT NULL,
  	"blog_source" "enum_blog_overview_blocks_dynamic_blog_grid_blog_source" DEFAULT 'latest' NOT NULL,
  	"category_filter_id" integer,
  	"limit" numeric DEFAULT 9 NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar DEFAULT 'Ontdek onze blogs' NOT NULL,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_categories" boolean DEFAULT false,
  	"color_scheme" "enum_blog_overview_blocks_dynamic_blog_grid_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_overview" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Blog' NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "blog_overview_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"blogs_id" integer,
  	"courses_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "course_overview_blocks_cta_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum_course_overview_blocks_cta_buttons_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE "course_overview_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_course_overview_blocks_cta_layout" DEFAULT 'split' NOT NULL,
  	"show_tagline" boolean DEFAULT false,
  	"tagline" varchar,
  	"heading" varchar NOT NULL,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"cta_type" "enum_course_overview_blocks_cta_cta_type" DEFAULT 'form' NOT NULL,
  	"form_id" integer,
  	"form_settings_form_placeholder" varchar DEFAULT 'Voer je e-mail in',
  	"form_settings_form_button_text" varchar DEFAULT 'Inschrijven',
  	"form_settings_terms_text" varchar DEFAULT 'U gaat akkoord met onze {privacyPolicy} en {termsLink}.',
  	"form_settings_terms_link" varchar DEFAULT '/terms',
  	"show_image" boolean DEFAULT true,
  	"image_id" integer,
  	"image_alt" varchar,
  	"color_scheme" "enum_course_overview_blocks_cta_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "course_overview_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_course_overview_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_course_overview_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_course_overview_blocks_content_columns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "course_overview_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color_scheme" "enum_course_overview_blocks_content_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "course_overview_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer NOT NULL,
  	"color_scheme" "enum_course_overview_blocks_media_block_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "course_overview_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"populate_by" "enum_course_overview_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum_course_overview_blocks_archive_relation_to" DEFAULT 'blogs',
  	"limit" numeric DEFAULT 10,
  	"color_scheme" "enum_course_overview_blocks_archive_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "course_overview_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"enable_intro" boolean,
  	"intro_content" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"color_scheme" "enum_course_overview_blocks_form_block_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "course_overview_blocks_faq_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" jsonb NOT NULL
  );
  
  CREATE TABLE "course_overview_blocks_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_contact_section" boolean DEFAULT true,
  	"contact_section_contact_heading" varchar DEFAULT 'Heb je nog vragen?',
  	"contact_section_contact_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"contact_section_contact_button_text" varchar DEFAULT 'Contact',
  	"contact_section_contact_button_link" varchar DEFAULT '/contact',
  	"color_scheme" "enum_course_overview_blocks_faq_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "course_overview_blocks_team_members_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_course_overview_blocks_team_members_social_links_platform" NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "course_overview_blocks_team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"avatar_id" integer NOT NULL
  );
  
  CREATE TABLE "course_overview_blocks_team" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Team',
  	"heading" varchar NOT NULL,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_hiring_section" boolean DEFAULT true,
  	"hiring_section_hiring_heading" varchar DEFAULT 'We werven!',
  	"hiring_section_hiring_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"hiring_section_hiring_button_text" varchar DEFAULT 'Open posities',
  	"hiring_section_hiring_button_link" varchar DEFAULT '/careers',
  	"color_scheme" "enum_course_overview_blocks_team_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "course_overview_blocks_testimonials_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rating" numeric DEFAULT 5 NOT NULL,
  	"quote" varchar NOT NULL,
  	"author_name" varchar NOT NULL,
  	"author_title" varchar NOT NULL,
  	"author_avatar_id" integer NOT NULL,
  	"company_logo_id" integer
  );
  
  CREATE TABLE "course_overview_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_stars" boolean DEFAULT true,
  	"color_scheme" "enum_course_overview_blocks_testimonials_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "course_overview_blocks_pricing_table_plans_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature" varchar NOT NULL
  );
  
  CREATE TABLE "course_overview_blocks_pricing_table_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"monthly_price" varchar NOT NULL,
  	"yearly_price" varchar,
  	"button_text" varchar DEFAULT 'Aan de slag',
  	"button_link" varchar DEFAULT '/contact',
  	"is_popular" boolean DEFAULT false
  );
  
  CREATE TABLE "course_overview_blocks_pricing_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Prijzen',
  	"heading" varchar NOT NULL,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_billing_toggle" boolean DEFAULT true,
  	"color_scheme" "enum_course_overview_blocks_pricing_table_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "course_overview_blocks_two_column_layout_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum_course_overview_blocks_two_column_layout_buttons_variant" DEFAULT 'secondary'
  );
  
  CREATE TABLE "course_overview_blocks_two_column_layout" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_position" "enum_course_overview_blocks_two_column_layout_image_position" DEFAULT 'right' NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"image_id" integer NOT NULL,
  	"image_alt" varchar,
  	"show_buttons" boolean DEFAULT true,
  	"color_scheme" "enum_course_overview_blocks_two_column_layout_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "course_overview_blocks_feature_grid_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"icon_id" integer,
  	"image_id" integer,
  	"image_alt" varchar NOT NULL,
  	"show_button" boolean DEFAULT false,
  	"button_text" varchar,
  	"button_link" varchar,
  	"button_variant" "enum_course_ovr_blck__grid_ftr_btn_var" DEFAULT 'link'
  );
  
  CREATE TABLE "course_overview_blocks_feature_grid_bottom_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum_course_overview_blocks_feature_grid_bottom_buttons_variant" DEFAULT 'secondary'
  );
  
  CREATE TABLE "course_overview_blocks_feature_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_course_overview_blocks_feature_grid_columns" DEFAULT '3' NOT NULL,
  	"item_type" "enum_course_overview_blocks_feature_grid_item_type" DEFAULT 'icon' NOT NULL,
  	"show_header_section" boolean DEFAULT true,
  	"header_section_tagline" varchar,
  	"header_section_heading" varchar,
  	"header_section_description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_item_buttons" boolean DEFAULT true,
  	"show_bottom_buttons" boolean DEFAULT false,
  	"color_scheme" "enum_course_overview_blocks_feature_grid_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "course_overview_blocks_header_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"link" varchar,
  	"variant" "enum_course_overview_blocks_header_buttons_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE "course_overview_blocks_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_course_overview_blocks_header_layout" DEFAULT 'split' NOT NULL,
  	"image_position" "enum_course_overview_blocks_header_image_position" DEFAULT 'right',
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_image" boolean DEFAULT true,
  	"image_id" integer,
  	"image_alt" varchar,
  	"show_overlay" boolean DEFAULT true,
  	"overlay_opacity" numeric DEFAULT 0.5,
  	"show_buttons" boolean DEFAULT true,
  	"color_scheme" "enum_course_overview_blocks_header_color_scheme" DEFAULT 'light',
  	"block_name" varchar
  );
  
  CREATE TABLE "course_overview_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"alt" varchar NOT NULL,
  	"link" varchar
  );
  
  CREATE TABLE "course_overview_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" "enum_course_overview_blocks_gallery_columns" DEFAULT '4' NOT NULL,
  	"show_heading" boolean DEFAULT true,
  	"heading" varchar,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"color_scheme" "enum_course_overview_blocks_gallery_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "course_overview_blocks_contact_info_methods" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_course_overview_blocks_contact_info_methods_icon" DEFAULT 'email' NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"link_text" varchar NOT NULL,
  	"link_href" varchar NOT NULL
  );
  
  CREATE TABLE "course_overview_blocks_contact_info" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color_scheme" "enum_course_overview_blocks_contact_info_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "course_overview_blocks_blog_grid_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"category" varchar
  );
  
  CREATE TABLE "course_overview_blocks_blog_grid_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"excerpt" varchar NOT NULL,
  	"category" varchar NOT NULL,
  	"read_time" varchar DEFAULT '5 min read' NOT NULL,
  	"image_id" integer NOT NULL,
  	"image_alt" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "course_overview_blocks_blog_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar NOT NULL,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_categories" boolean DEFAULT false,
  	"color_scheme" "enum_course_overview_blocks_blog_grid_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "course_overview_blocks_dynamic_blog_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"collection_type" "enum_course_overview_blocks_dynamic_blog_grid_collection_type" DEFAULT 'blogs' NOT NULL,
  	"blog_source" "enum_course_overview_blocks_dynamic_blog_grid_blog_source" DEFAULT 'latest' NOT NULL,
  	"category_filter_id" integer,
  	"limit" numeric DEFAULT 9 NOT NULL,
  	"show_tagline" boolean DEFAULT true,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar DEFAULT 'Ontdek onze blogs' NOT NULL,
  	"description" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","version":1,"children":[]}],"direction":"ltr"}}'::jsonb,
  	"show_categories" boolean DEFAULT false,
  	"color_scheme" "enum_course_overview_blocks_dynamic_blog_grid_color_scheme" DEFAULT 'light' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "course_overview" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Course' NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "course_overview_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"blogs_id" integer,
  	"courses_id" integer,
  	"categories_id" integer
  );
  
  ALTER TABLE "pages_blocks_cta_buttons" ADD CONSTRAINT "pages_blocks_cta_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_columns" ADD CONSTRAINT "pages_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_archive" ADD CONSTRAINT "pages_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_faqs" ADD CONSTRAINT "pages_blocks_faq_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq" ADD CONSTRAINT "pages_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_team_members_social_links" ADD CONSTRAINT "pages_blocks_team_members_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_team_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_team_members" ADD CONSTRAINT "pages_blocks_team_members_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_team_members" ADD CONSTRAINT "pages_blocks_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_team" ADD CONSTRAINT "pages_blocks_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_testimonials_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_testimonials_company_logo_id_media_id_fk" FOREIGN KEY ("company_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_table_plans_features" ADD CONSTRAINT "pages_blocks_pricing_table_plans_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_table_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_table_plans" ADD CONSTRAINT "pages_blocks_pricing_table_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_table" ADD CONSTRAINT "pages_blocks_pricing_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_two_column_layout_buttons" ADD CONSTRAINT "pages_blocks_two_column_layout_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_two_column_layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_two_column_layout" ADD CONSTRAINT "pages_blocks_two_column_layout_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_two_column_layout" ADD CONSTRAINT "pages_blocks_two_column_layout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_grid_features" ADD CONSTRAINT "pages_blocks_feature_grid_features_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_grid_features" ADD CONSTRAINT "pages_blocks_feature_grid_features_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_grid_features" ADD CONSTRAINT "pages_blocks_feature_grid_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_grid_bottom_buttons" ADD CONSTRAINT "pages_blocks_feature_grid_bottom_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature_grid" ADD CONSTRAINT "pages_blocks_feature_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_header_buttons" ADD CONSTRAINT "pages_blocks_header_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_header" ADD CONSTRAINT "pages_blocks_header_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_header" ADD CONSTRAINT "pages_blocks_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery" ADD CONSTRAINT "pages_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_info_methods" ADD CONSTRAINT "pages_blocks_contact_info_methods_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_contact_info"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_info" ADD CONSTRAINT "pages_blocks_contact_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_grid_categories" ADD CONSTRAINT "pages_blocks_blog_grid_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_grid_posts" ADD CONSTRAINT "pages_blocks_blog_grid_posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_grid_posts" ADD CONSTRAINT "pages_blocks_blog_grid_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_grid" ADD CONSTRAINT "pages_blocks_blog_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_dynamic_blog_grid" ADD CONSTRAINT "pages_blocks_dynamic_blog_grid_category_filter_id_categories_id_fk" FOREIGN KEY ("category_filter_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_dynamic_blog_grid" ADD CONSTRAINT "pages_blocks_dynamic_blog_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo_list_logos" ADD CONSTRAINT "pages_blocks_logo_list_logos_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo_list_logos" ADD CONSTRAINT "pages_blocks_logo_list_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_logo_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo_list" ADD CONSTRAINT "pages_blocks_logo_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout90_block" ADD CONSTRAINT "pages_blocks_layout90_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout90_block" ADD CONSTRAINT "pages_blocks_layout90_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout10_block_sub_headings" ADD CONSTRAINT "pages_blocks_layout10_block_sub_headings_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout10_block_sub_headings" ADD CONSTRAINT "pages_blocks_layout10_block_sub_headings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout10_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout10_block_buttons" ADD CONSTRAINT "pages_blocks_layout10_block_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout10_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout10_block" ADD CONSTRAINT "pages_blocks_layout10_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout10_block" ADD CONSTRAINT "pages_blocks_layout10_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout102_block_sub_headings" ADD CONSTRAINT "pages_blocks_layout102_block_sub_headings_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout102_block_sub_headings" ADD CONSTRAINT "pages_blocks_layout102_block_sub_headings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout102_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout102_block" ADD CONSTRAINT "pages_blocks_layout102_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout102_block" ADD CONSTRAINT "pages_blocks_layout102_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout245_block_sections" ADD CONSTRAINT "pages_blocks_layout245_block_sections_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout245_block_sections" ADD CONSTRAINT "pages_blocks_layout245_block_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout245_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout245_block_buttons" ADD CONSTRAINT "pages_blocks_layout245_block_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout245_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout245_block" ADD CONSTRAINT "pages_blocks_layout245_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout216_block_stats" ADD CONSTRAINT "pages_blocks_layout216_block_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout216_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout216_block_buttons" ADD CONSTRAINT "pages_blocks_layout216_block_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout216_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout216_block" ADD CONSTRAINT "pages_blocks_layout216_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout216_block" ADD CONSTRAINT "pages_blocks_layout216_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout18_block_features" ADD CONSTRAINT "pages_blocks_layout18_block_features_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout18_block_features" ADD CONSTRAINT "pages_blocks_layout18_block_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout18_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout18_block" ADD CONSTRAINT "pages_blocks_layout18_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout18_block" ADD CONSTRAINT "pages_blocks_layout18_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout13_block_logos" ADD CONSTRAINT "pages_blocks_layout13_block_logos_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout13_block_logos" ADD CONSTRAINT "pages_blocks_layout13_block_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout13_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout13_block_buttons" ADD CONSTRAINT "pages_blocks_layout13_block_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout13_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout13_block" ADD CONSTRAINT "pages_blocks_layout13_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout13_block" ADD CONSTRAINT "pages_blocks_layout13_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_post_header_breadcrumbs" ADD CONSTRAINT "pages_blocks_blog_post_header_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog_post_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "bph_social_links" ADD CONSTRAINT "bph_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog_post_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_post_header" ADD CONSTRAINT "pages_blocks_blog_post_header_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_post_header" ADD CONSTRAINT "pages_blocks_blog_post_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_courses_fk" FOREIGN KEY ("courses_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_buttons" ADD CONSTRAINT "_pages_v_blocks_cta_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_columns" ADD CONSTRAINT "_pages_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_archive" ADD CONSTRAINT "_pages_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_faqs" ADD CONSTRAINT "_pages_v_blocks_faq_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq" ADD CONSTRAINT "_pages_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_team_members_social_links" ADD CONSTRAINT "_pages_v_blocks_team_members_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_team_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_team_members" ADD CONSTRAINT "_pages_v_blocks_team_members_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_team_members" ADD CONSTRAINT "_pages_v_blocks_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_team" ADD CONSTRAINT "_pages_v_blocks_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials_testimonials_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials_testimonials_company_logo_id_media_id_fk" FOREIGN KEY ("company_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_table_plans_features" ADD CONSTRAINT "_pages_v_blocks_pricing_table_plans_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_table_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_table_plans" ADD CONSTRAINT "_pages_v_blocks_pricing_table_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_table" ADD CONSTRAINT "_pages_v_blocks_pricing_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_two_column_layout_buttons" ADD CONSTRAINT "_pages_v_blocks_two_column_layout_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_two_column_layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_two_column_layout" ADD CONSTRAINT "_pages_v_blocks_two_column_layout_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_two_column_layout" ADD CONSTRAINT "_pages_v_blocks_two_column_layout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_grid_features" ADD CONSTRAINT "_pages_v_blocks_feature_grid_features_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_grid_features" ADD CONSTRAINT "_pages_v_blocks_feature_grid_features_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_grid_features" ADD CONSTRAINT "_pages_v_blocks_feature_grid_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_grid_bottom_buttons" ADD CONSTRAINT "_pages_v_blocks_feature_grid_bottom_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature_grid" ADD CONSTRAINT "_pages_v_blocks_feature_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_header_buttons" ADD CONSTRAINT "_pages_v_blocks_header_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_header" ADD CONSTRAINT "_pages_v_blocks_header_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_header" ADD CONSTRAINT "_pages_v_blocks_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery_images" ADD CONSTRAINT "_pages_v_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery_images" ADD CONSTRAINT "_pages_v_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery" ADD CONSTRAINT "_pages_v_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_info_methods" ADD CONSTRAINT "_pages_v_blocks_contact_info_methods_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_contact_info"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_info" ADD CONSTRAINT "_pages_v_blocks_contact_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_grid_categories" ADD CONSTRAINT "_pages_v_blocks_blog_grid_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_grid_posts" ADD CONSTRAINT "_pages_v_blocks_blog_grid_posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_grid_posts" ADD CONSTRAINT "_pages_v_blocks_blog_grid_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_grid" ADD CONSTRAINT "_pages_v_blocks_blog_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dynamic_blog_grid" ADD CONSTRAINT "_pages_v_blocks_dynamic_blog_grid_category_filter_id_categories_id_fk" FOREIGN KEY ("category_filter_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_dynamic_blog_grid" ADD CONSTRAINT "_pages_v_blocks_dynamic_blog_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo_list_logos" ADD CONSTRAINT "_pages_v_blocks_logo_list_logos_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo_list_logos" ADD CONSTRAINT "_pages_v_blocks_logo_list_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_logo_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo_list" ADD CONSTRAINT "_pages_v_blocks_logo_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout90_block" ADD CONSTRAINT "_pages_v_blocks_layout90_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout90_block" ADD CONSTRAINT "_pages_v_blocks_layout90_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout10_block_sub_headings" ADD CONSTRAINT "_pages_v_blocks_layout10_block_sub_headings_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout10_block_sub_headings" ADD CONSTRAINT "_pages_v_blocks_layout10_block_sub_headings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout10_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout10_block_buttons" ADD CONSTRAINT "_pages_v_blocks_layout10_block_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout10_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout10_block" ADD CONSTRAINT "_pages_v_blocks_layout10_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout10_block" ADD CONSTRAINT "_pages_v_blocks_layout10_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout102_block_sub_headings" ADD CONSTRAINT "_pages_v_blocks_layout102_block_sub_headings_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout102_block_sub_headings" ADD CONSTRAINT "_pages_v_blocks_layout102_block_sub_headings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout102_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout102_block" ADD CONSTRAINT "_pages_v_blocks_layout102_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout102_block" ADD CONSTRAINT "_pages_v_blocks_layout102_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout245_block_sections" ADD CONSTRAINT "_pages_v_blocks_layout245_block_sections_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout245_block_sections" ADD CONSTRAINT "_pages_v_blocks_layout245_block_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout245_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout245_block_buttons" ADD CONSTRAINT "_pages_v_blocks_layout245_block_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout245_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout245_block" ADD CONSTRAINT "_pages_v_blocks_layout245_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout216_block_stats" ADD CONSTRAINT "_pages_v_blocks_layout216_block_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout216_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout216_block_buttons" ADD CONSTRAINT "_pages_v_blocks_layout216_block_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout216_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout216_block" ADD CONSTRAINT "_pages_v_blocks_layout216_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout216_block" ADD CONSTRAINT "_pages_v_blocks_layout216_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout18_block_features" ADD CONSTRAINT "_pages_v_blocks_layout18_block_features_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout18_block_features" ADD CONSTRAINT "_pages_v_blocks_layout18_block_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout18_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout18_block" ADD CONSTRAINT "_pages_v_blocks_layout18_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout18_block" ADD CONSTRAINT "_pages_v_blocks_layout18_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout13_block_logos" ADD CONSTRAINT "_pages_v_blocks_layout13_block_logos_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout13_block_logos" ADD CONSTRAINT "_pages_v_blocks_layout13_block_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout13_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout13_block_buttons" ADD CONSTRAINT "_pages_v_blocks_layout13_block_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout13_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout13_block" ADD CONSTRAINT "_pages_v_blocks_layout13_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout13_block" ADD CONSTRAINT "_pages_v_blocks_layout13_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_post_header_breadcrumbs" ADD CONSTRAINT "_pages_v_blocks_blog_post_header_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog_post_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_bph_social_links_v" ADD CONSTRAINT "_bph_social_links_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog_post_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_post_header" ADD CONSTRAINT "_pages_v_blocks_blog_post_header_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_post_header" ADD CONSTRAINT "_pages_v_blocks_blog_post_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_courses_fk" FOREIGN KEY ("courses_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_cta_buttons" ADD CONSTRAINT "blogs_blocks_cta_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_cta" ADD CONSTRAINT "blogs_blocks_cta_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_cta" ADD CONSTRAINT "blogs_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_cta" ADD CONSTRAINT "blogs_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_content_columns" ADD CONSTRAINT "blogs_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_content" ADD CONSTRAINT "blogs_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_media_block" ADD CONSTRAINT "blogs_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_media_block" ADD CONSTRAINT "blogs_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_archive" ADD CONSTRAINT "blogs_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_form_block" ADD CONSTRAINT "blogs_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_form_block" ADD CONSTRAINT "blogs_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_faq_faqs" ADD CONSTRAINT "blogs_blocks_faq_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_faq" ADD CONSTRAINT "blogs_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_team_members_social_links" ADD CONSTRAINT "blogs_blocks_team_members_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_team_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_team_members" ADD CONSTRAINT "blogs_blocks_team_members_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_team_members" ADD CONSTRAINT "blogs_blocks_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_team" ADD CONSTRAINT "blogs_blocks_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_testimonials_testimonials" ADD CONSTRAINT "blogs_blocks_testimonials_testimonials_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_testimonials_testimonials" ADD CONSTRAINT "blogs_blocks_testimonials_testimonials_company_logo_id_media_id_fk" FOREIGN KEY ("company_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_testimonials_testimonials" ADD CONSTRAINT "blogs_blocks_testimonials_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_testimonials" ADD CONSTRAINT "blogs_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_pricing_table_plans_features" ADD CONSTRAINT "blogs_blocks_pricing_table_plans_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_pricing_table_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_pricing_table_plans" ADD CONSTRAINT "blogs_blocks_pricing_table_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_pricing_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_pricing_table" ADD CONSTRAINT "blogs_blocks_pricing_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_two_column_layout_buttons" ADD CONSTRAINT "blogs_blocks_two_column_layout_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_two_column_layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_two_column_layout" ADD CONSTRAINT "blogs_blocks_two_column_layout_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_two_column_layout" ADD CONSTRAINT "blogs_blocks_two_column_layout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_feature_grid_features" ADD CONSTRAINT "blogs_blocks_feature_grid_features_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_feature_grid_features" ADD CONSTRAINT "blogs_blocks_feature_grid_features_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_feature_grid_features" ADD CONSTRAINT "blogs_blocks_feature_grid_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_feature_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_feature_grid_bottom_buttons" ADD CONSTRAINT "blogs_blocks_feature_grid_bottom_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_feature_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_feature_grid" ADD CONSTRAINT "blogs_blocks_feature_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_header_buttons" ADD CONSTRAINT "blogs_blocks_header_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_header" ADD CONSTRAINT "blogs_blocks_header_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_header" ADD CONSTRAINT "blogs_blocks_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_gallery_images" ADD CONSTRAINT "blogs_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_gallery_images" ADD CONSTRAINT "blogs_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_gallery" ADD CONSTRAINT "blogs_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_contact_info_methods" ADD CONSTRAINT "blogs_blocks_contact_info_methods_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_contact_info"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_contact_info" ADD CONSTRAINT "blogs_blocks_contact_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_blog_grid_categories" ADD CONSTRAINT "blogs_blocks_blog_grid_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_blog_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_blog_grid_posts" ADD CONSTRAINT "blogs_blocks_blog_grid_posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_blog_grid_posts" ADD CONSTRAINT "blogs_blocks_blog_grid_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs_blocks_blog_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_blog_grid" ADD CONSTRAINT "blogs_blocks_blog_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_blocks_dynamic_blog_grid" ADD CONSTRAINT "blogs_blocks_dynamic_blog_grid_category_filter_id_categories_id_fk" FOREIGN KEY ("category_filter_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_blocks_dynamic_blog_grid" ADD CONSTRAINT "blogs_blocks_dynamic_blog_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_populated_authors" ADD CONSTRAINT "blogs_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs" ADD CONSTRAINT "blogs_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs" ADD CONSTRAINT "blogs_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_rels" ADD CONSTRAINT "blogs_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_rels" ADD CONSTRAINT "blogs_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_rels" ADD CONSTRAINT "blogs_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_rels" ADD CONSTRAINT "blogs_rels_courses_fk" FOREIGN KEY ("courses_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_rels" ADD CONSTRAINT "blogs_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_rels" ADD CONSTRAINT "blogs_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_cta_buttons" ADD CONSTRAINT "_blogs_v_blocks_cta_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_cta" ADD CONSTRAINT "_blogs_v_blocks_cta_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_cta" ADD CONSTRAINT "_blogs_v_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_cta" ADD CONSTRAINT "_blogs_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_content_columns" ADD CONSTRAINT "_blogs_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_content" ADD CONSTRAINT "_blogs_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_media_block" ADD CONSTRAINT "_blogs_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_media_block" ADD CONSTRAINT "_blogs_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_archive" ADD CONSTRAINT "_blogs_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_form_block" ADD CONSTRAINT "_blogs_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_form_block" ADD CONSTRAINT "_blogs_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_faq_faqs" ADD CONSTRAINT "_blogs_v_blocks_faq_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_faq" ADD CONSTRAINT "_blogs_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_team_members_social_links" ADD CONSTRAINT "_blogs_v_blocks_team_members_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v_blocks_team_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_team_members" ADD CONSTRAINT "_blogs_v_blocks_team_members_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_team_members" ADD CONSTRAINT "_blogs_v_blocks_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v_blocks_team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_team" ADD CONSTRAINT "_blogs_v_blocks_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_testimonials_testimonials" ADD CONSTRAINT "_blogs_v_blocks_testimonials_testimonials_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_testimonials_testimonials" ADD CONSTRAINT "_blogs_v_blocks_testimonials_testimonials_company_logo_id_media_id_fk" FOREIGN KEY ("company_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_testimonials_testimonials" ADD CONSTRAINT "_blogs_v_blocks_testimonials_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_testimonials" ADD CONSTRAINT "_blogs_v_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_pricing_table_plans_features" ADD CONSTRAINT "_blogs_v_blocks_pricing_table_plans_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v_blocks_pricing_table_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_pricing_table_plans" ADD CONSTRAINT "_blogs_v_blocks_pricing_table_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v_blocks_pricing_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_pricing_table" ADD CONSTRAINT "_blogs_v_blocks_pricing_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_two_column_layout_buttons" ADD CONSTRAINT "_blogs_v_blocks_two_column_layout_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v_blocks_two_column_layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_two_column_layout" ADD CONSTRAINT "_blogs_v_blocks_two_column_layout_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_two_column_layout" ADD CONSTRAINT "_blogs_v_blocks_two_column_layout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_feature_grid_features" ADD CONSTRAINT "_blogs_v_blocks_feature_grid_features_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_feature_grid_features" ADD CONSTRAINT "_blogs_v_blocks_feature_grid_features_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_feature_grid_features" ADD CONSTRAINT "_blogs_v_blocks_feature_grid_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v_blocks_feature_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_feature_grid_bottom_buttons" ADD CONSTRAINT "_blogs_v_blocks_feature_grid_bottom_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v_blocks_feature_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_feature_grid" ADD CONSTRAINT "_blogs_v_blocks_feature_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_header_buttons" ADD CONSTRAINT "_blogs_v_blocks_header_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v_blocks_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_header" ADD CONSTRAINT "_blogs_v_blocks_header_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_header" ADD CONSTRAINT "_blogs_v_blocks_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_gallery_images" ADD CONSTRAINT "_blogs_v_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_gallery_images" ADD CONSTRAINT "_blogs_v_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_gallery" ADD CONSTRAINT "_blogs_v_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_contact_info_methods" ADD CONSTRAINT "_blogs_v_blocks_contact_info_methods_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v_blocks_contact_info"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_contact_info" ADD CONSTRAINT "_blogs_v_blocks_contact_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_blog_grid_categories" ADD CONSTRAINT "_blogs_v_blocks_blog_grid_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v_blocks_blog_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_blog_grid_posts" ADD CONSTRAINT "_blogs_v_blocks_blog_grid_posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_blog_grid_posts" ADD CONSTRAINT "_blogs_v_blocks_blog_grid_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v_blocks_blog_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_blog_grid" ADD CONSTRAINT "_blogs_v_blocks_blog_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_dynamic_blog_grid" ADD CONSTRAINT "_blogs_v_blocks_dynamic_blog_grid_category_filter_id_categories_id_fk" FOREIGN KEY ("category_filter_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blogs_v_blocks_dynamic_blog_grid" ADD CONSTRAINT "_blogs_v_blocks_dynamic_blog_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_version_populated_authors" ADD CONSTRAINT "_blogs_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v" ADD CONSTRAINT "_blogs_v_parent_id_blogs_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blogs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blogs_v" ADD CONSTRAINT "_blogs_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blogs_v" ADD CONSTRAINT "_blogs_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blogs_v_rels" ADD CONSTRAINT "_blogs_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_blogs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_rels" ADD CONSTRAINT "_blogs_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_rels" ADD CONSTRAINT "_blogs_v_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_rels" ADD CONSTRAINT "_blogs_v_rels_courses_fk" FOREIGN KEY ("courses_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_rels" ADD CONSTRAINT "_blogs_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blogs_v_rels" ADD CONSTRAINT "_blogs_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_cta_buttons" ADD CONSTRAINT "courses_blocks_cta_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_cta" ADD CONSTRAINT "courses_blocks_cta_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courses_blocks_cta" ADD CONSTRAINT "courses_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courses_blocks_cta" ADD CONSTRAINT "courses_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_content_columns" ADD CONSTRAINT "courses_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_content" ADD CONSTRAINT "courses_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_media_block" ADD CONSTRAINT "courses_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courses_blocks_media_block" ADD CONSTRAINT "courses_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_archive" ADD CONSTRAINT "courses_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_form_block" ADD CONSTRAINT "courses_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courses_blocks_form_block" ADD CONSTRAINT "courses_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_faq_faqs" ADD CONSTRAINT "courses_blocks_faq_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_faq" ADD CONSTRAINT "courses_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_team_members_social_links" ADD CONSTRAINT "courses_blocks_team_members_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses_blocks_team_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_team_members" ADD CONSTRAINT "courses_blocks_team_members_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courses_blocks_team_members" ADD CONSTRAINT "courses_blocks_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses_blocks_team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_team" ADD CONSTRAINT "courses_blocks_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_testimonials_testimonials" ADD CONSTRAINT "courses_blocks_testimonials_testimonials_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courses_blocks_testimonials_testimonials" ADD CONSTRAINT "courses_blocks_testimonials_testimonials_company_logo_id_media_id_fk" FOREIGN KEY ("company_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courses_blocks_testimonials_testimonials" ADD CONSTRAINT "courses_blocks_testimonials_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_testimonials" ADD CONSTRAINT "courses_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_pricing_table_plans_features" ADD CONSTRAINT "courses_blocks_pricing_table_plans_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses_blocks_pricing_table_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_pricing_table_plans" ADD CONSTRAINT "courses_blocks_pricing_table_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses_blocks_pricing_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_pricing_table" ADD CONSTRAINT "courses_blocks_pricing_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_two_column_layout_buttons" ADD CONSTRAINT "courses_blocks_two_column_layout_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses_blocks_two_column_layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_two_column_layout" ADD CONSTRAINT "courses_blocks_two_column_layout_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courses_blocks_two_column_layout" ADD CONSTRAINT "courses_blocks_two_column_layout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_feature_grid_features" ADD CONSTRAINT "courses_blocks_feature_grid_features_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courses_blocks_feature_grid_features" ADD CONSTRAINT "courses_blocks_feature_grid_features_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courses_blocks_feature_grid_features" ADD CONSTRAINT "courses_blocks_feature_grid_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses_blocks_feature_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_feature_grid_bottom_buttons" ADD CONSTRAINT "courses_blocks_feature_grid_bottom_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses_blocks_feature_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_feature_grid" ADD CONSTRAINT "courses_blocks_feature_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_header_buttons" ADD CONSTRAINT "courses_blocks_header_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses_blocks_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_header" ADD CONSTRAINT "courses_blocks_header_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courses_blocks_header" ADD CONSTRAINT "courses_blocks_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_gallery_images" ADD CONSTRAINT "courses_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courses_blocks_gallery_images" ADD CONSTRAINT "courses_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_gallery" ADD CONSTRAINT "courses_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_contact_info_methods" ADD CONSTRAINT "courses_blocks_contact_info_methods_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses_blocks_contact_info"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_contact_info" ADD CONSTRAINT "courses_blocks_contact_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_blog_grid_categories" ADD CONSTRAINT "courses_blocks_blog_grid_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses_blocks_blog_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_blog_grid_posts" ADD CONSTRAINT "courses_blocks_blog_grid_posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courses_blocks_blog_grid_posts" ADD CONSTRAINT "courses_blocks_blog_grid_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses_blocks_blog_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_blog_grid" ADD CONSTRAINT "courses_blocks_blog_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_blocks_dynamic_blog_grid" ADD CONSTRAINT "courses_blocks_dynamic_blog_grid_category_filter_id_categories_id_fk" FOREIGN KEY ("category_filter_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courses_blocks_dynamic_blog_grid" ADD CONSTRAINT "courses_blocks_dynamic_blog_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_populated_authors" ADD CONSTRAINT "courses_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses" ADD CONSTRAINT "courses_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courses" ADD CONSTRAINT "courses_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "courses_rels" ADD CONSTRAINT "courses_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_rels" ADD CONSTRAINT "courses_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_rels" ADD CONSTRAINT "courses_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_rels" ADD CONSTRAINT "courses_rels_courses_fk" FOREIGN KEY ("courses_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_rels" ADD CONSTRAINT "courses_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "courses_rels" ADD CONSTRAINT "courses_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_cta_buttons" ADD CONSTRAINT "_courses_v_blocks_cta_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_cta" ADD CONSTRAINT "_courses_v_blocks_cta_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_cta" ADD CONSTRAINT "_courses_v_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_cta" ADD CONSTRAINT "_courses_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_content_columns" ADD CONSTRAINT "_courses_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_content" ADD CONSTRAINT "_courses_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_media_block" ADD CONSTRAINT "_courses_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_media_block" ADD CONSTRAINT "_courses_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_archive" ADD CONSTRAINT "_courses_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_form_block" ADD CONSTRAINT "_courses_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_form_block" ADD CONSTRAINT "_courses_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_faq_faqs" ADD CONSTRAINT "_courses_v_blocks_faq_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_faq" ADD CONSTRAINT "_courses_v_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_team_members_social_links" ADD CONSTRAINT "_courses_v_blocks_team_members_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v_blocks_team_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_team_members" ADD CONSTRAINT "_courses_v_blocks_team_members_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_team_members" ADD CONSTRAINT "_courses_v_blocks_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v_blocks_team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_team" ADD CONSTRAINT "_courses_v_blocks_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_testimonials_testimonials" ADD CONSTRAINT "_courses_v_blocks_testimonials_testimonials_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_testimonials_testimonials" ADD CONSTRAINT "_courses_v_blocks_testimonials_testimonials_company_logo_id_media_id_fk" FOREIGN KEY ("company_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_testimonials_testimonials" ADD CONSTRAINT "_courses_v_blocks_testimonials_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_testimonials" ADD CONSTRAINT "_courses_v_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_pricing_table_plans_features" ADD CONSTRAINT "_courses_v_blocks_pricing_table_plans_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v_blocks_pricing_table_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_pricing_table_plans" ADD CONSTRAINT "_courses_v_blocks_pricing_table_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v_blocks_pricing_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_pricing_table" ADD CONSTRAINT "_courses_v_blocks_pricing_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_two_column_layout_buttons" ADD CONSTRAINT "_courses_v_blocks_two_column_layout_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v_blocks_two_column_layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_two_column_layout" ADD CONSTRAINT "_courses_v_blocks_two_column_layout_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_two_column_layout" ADD CONSTRAINT "_courses_v_blocks_two_column_layout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_feature_grid_features" ADD CONSTRAINT "_courses_v_blocks_feature_grid_features_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_feature_grid_features" ADD CONSTRAINT "_courses_v_blocks_feature_grid_features_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_feature_grid_features" ADD CONSTRAINT "_courses_v_blocks_feature_grid_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v_blocks_feature_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_feature_grid_bottom_buttons" ADD CONSTRAINT "_courses_v_blocks_feature_grid_bottom_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v_blocks_feature_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_feature_grid" ADD CONSTRAINT "_courses_v_blocks_feature_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_header_buttons" ADD CONSTRAINT "_courses_v_blocks_header_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v_blocks_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_header" ADD CONSTRAINT "_courses_v_blocks_header_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_header" ADD CONSTRAINT "_courses_v_blocks_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_gallery_images" ADD CONSTRAINT "_courses_v_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_gallery_images" ADD CONSTRAINT "_courses_v_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_gallery" ADD CONSTRAINT "_courses_v_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_contact_info_methods" ADD CONSTRAINT "_courses_v_blocks_contact_info_methods_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v_blocks_contact_info"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_contact_info" ADD CONSTRAINT "_courses_v_blocks_contact_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_blog_grid_categories" ADD CONSTRAINT "_courses_v_blocks_blog_grid_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v_blocks_blog_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_blog_grid_posts" ADD CONSTRAINT "_courses_v_blocks_blog_grid_posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_blog_grid_posts" ADD CONSTRAINT "_courses_v_blocks_blog_grid_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v_blocks_blog_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_blog_grid" ADD CONSTRAINT "_courses_v_blocks_blog_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_dynamic_blog_grid" ADD CONSTRAINT "_courses_v_blocks_dynamic_blog_grid_category_filter_id_categories_id_fk" FOREIGN KEY ("category_filter_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courses_v_blocks_dynamic_blog_grid" ADD CONSTRAINT "_courses_v_blocks_dynamic_blog_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_version_populated_authors" ADD CONSTRAINT "_courses_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v" ADD CONSTRAINT "_courses_v_parent_id_courses_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."courses"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courses_v" ADD CONSTRAINT "_courses_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courses_v" ADD CONSTRAINT "_courses_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_courses_v_rels" ADD CONSTRAINT "_courses_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_courses_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_rels" ADD CONSTRAINT "_courses_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_rels" ADD CONSTRAINT "_courses_v_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_rels" ADD CONSTRAINT "_courses_v_rels_courses_fk" FOREIGN KEY ("courses_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_rels" ADD CONSTRAINT "_courses_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_courses_v_rels" ADD CONSTRAINT "_courses_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_doc_id_categories_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_courses_fk" FOREIGN KEY ("courses_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_country" ADD CONSTRAINT "forms_blocks_country_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_message" ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_number" ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_state" ADD CONSTRAINT "forms_blocks_state_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "search_categories" ADD CONSTRAINT "search_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search" ADD CONSTRAINT "search_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_courses_fk" FOREIGN KEY ("courses_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_courses_fk" FOREIGN KEY ("courses_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_search_fk" FOREIGN KEY ("search_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_jobs_fk" FOREIGN KEY ("payload_jobs_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_action_buttons" ADD CONSTRAINT "header_action_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_courses_fk" FOREIGN KEY ("courses_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_link_sections_links" ADD CONSTRAINT "footer_link_sections_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_link_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_link_sections" ADD CONSTRAINT "footer_link_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_social_links" ADD CONSTRAINT "footer_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_legal_links" ADD CONSTRAINT "footer_legal_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_courses_fk" FOREIGN KEY ("courses_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "global_cta_buttons" ADD CONSTRAINT "global_cta_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."global_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "global_cta" ADD CONSTRAINT "global_cta_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "global_cta" ADD CONSTRAINT "global_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_cta_buttons" ADD CONSTRAINT "blog_overview_blocks_cta_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_cta" ADD CONSTRAINT "blog_overview_blocks_cta_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_cta" ADD CONSTRAINT "blog_overview_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_cta" ADD CONSTRAINT "blog_overview_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_content_columns" ADD CONSTRAINT "blog_overview_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_content" ADD CONSTRAINT "blog_overview_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_media_block" ADD CONSTRAINT "blog_overview_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_media_block" ADD CONSTRAINT "blog_overview_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_archive" ADD CONSTRAINT "blog_overview_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_form_block" ADD CONSTRAINT "blog_overview_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_form_block" ADD CONSTRAINT "blog_overview_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_faq_faqs" ADD CONSTRAINT "blog_overview_blocks_faq_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_faq" ADD CONSTRAINT "blog_overview_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_team_members_social_links" ADD CONSTRAINT "blog_overview_blocks_team_members_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview_blocks_team_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_team_members" ADD CONSTRAINT "blog_overview_blocks_team_members_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_team_members" ADD CONSTRAINT "blog_overview_blocks_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview_blocks_team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_team" ADD CONSTRAINT "blog_overview_blocks_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_testimonials_testimonials" ADD CONSTRAINT "blog_overview_blocks_testimonials_testimonials_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_testimonials_testimonials" ADD CONSTRAINT "blog_overview_blocks_testimonials_testimonials_company_logo_id_media_id_fk" FOREIGN KEY ("company_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_testimonials_testimonials" ADD CONSTRAINT "blog_overview_blocks_testimonials_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_testimonials" ADD CONSTRAINT "blog_overview_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_pricing_table_plans_features" ADD CONSTRAINT "blog_overview_blocks_pricing_table_plans_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview_blocks_pricing_table_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_pricing_table_plans" ADD CONSTRAINT "blog_overview_blocks_pricing_table_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview_blocks_pricing_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_pricing_table" ADD CONSTRAINT "blog_overview_blocks_pricing_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_two_column_layout_buttons" ADD CONSTRAINT "blog_overview_blocks_two_column_layout_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview_blocks_two_column_layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_two_column_layout" ADD CONSTRAINT "blog_overview_blocks_two_column_layout_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_two_column_layout" ADD CONSTRAINT "blog_overview_blocks_two_column_layout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_feature_grid_features" ADD CONSTRAINT "blog_overview_blocks_feature_grid_features_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_feature_grid_features" ADD CONSTRAINT "blog_overview_blocks_feature_grid_features_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_feature_grid_features" ADD CONSTRAINT "blog_overview_blocks_feature_grid_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview_blocks_feature_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_feature_grid_bottom_buttons" ADD CONSTRAINT "blog_overview_blocks_feature_grid_bottom_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview_blocks_feature_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_feature_grid" ADD CONSTRAINT "blog_overview_blocks_feature_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_header_buttons" ADD CONSTRAINT "blog_overview_blocks_header_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview_blocks_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_header" ADD CONSTRAINT "blog_overview_blocks_header_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_header" ADD CONSTRAINT "blog_overview_blocks_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_gallery_images" ADD CONSTRAINT "blog_overview_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_gallery_images" ADD CONSTRAINT "blog_overview_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_gallery" ADD CONSTRAINT "blog_overview_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_contact_info_methods" ADD CONSTRAINT "blog_overview_blocks_contact_info_methods_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview_blocks_contact_info"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_contact_info" ADD CONSTRAINT "blog_overview_blocks_contact_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_blog_grid_categories" ADD CONSTRAINT "blog_overview_blocks_blog_grid_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview_blocks_blog_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_blog_grid_posts" ADD CONSTRAINT "blog_overview_blocks_blog_grid_posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_blog_grid_posts" ADD CONSTRAINT "blog_overview_blocks_blog_grid_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview_blocks_blog_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_blog_grid" ADD CONSTRAINT "blog_overview_blocks_blog_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_dynamic_blog_grid" ADD CONSTRAINT "blog_overview_blocks_dynamic_blog_grid_category_filter_id_categories_id_fk" FOREIGN KEY ("category_filter_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_overview_blocks_dynamic_blog_grid" ADD CONSTRAINT "blog_overview_blocks_dynamic_blog_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview" ADD CONSTRAINT "blog_overview_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_overview_rels" ADD CONSTRAINT "blog_overview_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blog_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_rels" ADD CONSTRAINT "blog_overview_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_rels" ADD CONSTRAINT "blog_overview_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_rels" ADD CONSTRAINT "blog_overview_rels_courses_fk" FOREIGN KEY ("courses_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_overview_rels" ADD CONSTRAINT "blog_overview_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_cta_buttons" ADD CONSTRAINT "course_overview_blocks_cta_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_cta" ADD CONSTRAINT "course_overview_blocks_cta_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_cta" ADD CONSTRAINT "course_overview_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_cta" ADD CONSTRAINT "course_overview_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_content_columns" ADD CONSTRAINT "course_overview_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_content" ADD CONSTRAINT "course_overview_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_media_block" ADD CONSTRAINT "course_overview_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_media_block" ADD CONSTRAINT "course_overview_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_archive" ADD CONSTRAINT "course_overview_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_form_block" ADD CONSTRAINT "course_overview_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_form_block" ADD CONSTRAINT "course_overview_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_faq_faqs" ADD CONSTRAINT "course_overview_blocks_faq_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview_blocks_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_faq" ADD CONSTRAINT "course_overview_blocks_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_team_members_social_links" ADD CONSTRAINT "course_overview_blocks_team_members_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview_blocks_team_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_team_members" ADD CONSTRAINT "course_overview_blocks_team_members_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_team_members" ADD CONSTRAINT "course_overview_blocks_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview_blocks_team"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_team" ADD CONSTRAINT "course_overview_blocks_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_testimonials_testimonials" ADD CONSTRAINT "course_overview_blocks_testimonials_testimonials_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_testimonials_testimonials" ADD CONSTRAINT "course_overview_blocks_testimonials_testimonials_company_logo_id_media_id_fk" FOREIGN KEY ("company_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_testimonials_testimonials" ADD CONSTRAINT "course_overview_blocks_testimonials_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview_blocks_testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_testimonials" ADD CONSTRAINT "course_overview_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_pricing_table_plans_features" ADD CONSTRAINT "course_overview_blocks_pricing_table_plans_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview_blocks_pricing_table_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_pricing_table_plans" ADD CONSTRAINT "course_overview_blocks_pricing_table_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview_blocks_pricing_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_pricing_table" ADD CONSTRAINT "course_overview_blocks_pricing_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_two_column_layout_buttons" ADD CONSTRAINT "course_overview_blocks_two_column_layout_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview_blocks_two_column_layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_two_column_layout" ADD CONSTRAINT "course_overview_blocks_two_column_layout_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_two_column_layout" ADD CONSTRAINT "course_overview_blocks_two_column_layout_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_feature_grid_features" ADD CONSTRAINT "course_overview_blocks_feature_grid_features_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_feature_grid_features" ADD CONSTRAINT "course_overview_blocks_feature_grid_features_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_feature_grid_features" ADD CONSTRAINT "course_overview_blocks_feature_grid_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview_blocks_feature_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_feature_grid_bottom_buttons" ADD CONSTRAINT "course_overview_blocks_feature_grid_bottom_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview_blocks_feature_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_feature_grid" ADD CONSTRAINT "course_overview_blocks_feature_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_header_buttons" ADD CONSTRAINT "course_overview_blocks_header_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview_blocks_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_header" ADD CONSTRAINT "course_overview_blocks_header_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_header" ADD CONSTRAINT "course_overview_blocks_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_gallery_images" ADD CONSTRAINT "course_overview_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_gallery_images" ADD CONSTRAINT "course_overview_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_gallery" ADD CONSTRAINT "course_overview_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_contact_info_methods" ADD CONSTRAINT "course_overview_blocks_contact_info_methods_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview_blocks_contact_info"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_contact_info" ADD CONSTRAINT "course_overview_blocks_contact_info_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_blog_grid_categories" ADD CONSTRAINT "course_overview_blocks_blog_grid_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview_blocks_blog_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_blog_grid_posts" ADD CONSTRAINT "course_overview_blocks_blog_grid_posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_blog_grid_posts" ADD CONSTRAINT "course_overview_blocks_blog_grid_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview_blocks_blog_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_blog_grid" ADD CONSTRAINT "course_overview_blocks_blog_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_dynamic_blog_grid" ADD CONSTRAINT "course_overview_blocks_dynamic_blog_grid_category_filter_id_categories_id_fk" FOREIGN KEY ("category_filter_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "course_overview_blocks_dynamic_blog_grid" ADD CONSTRAINT "course_overview_blocks_dynamic_blog_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview" ADD CONSTRAINT "course_overview_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "course_overview_rels" ADD CONSTRAINT "course_overview_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."course_overview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_rels" ADD CONSTRAINT "course_overview_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_rels" ADD CONSTRAINT "course_overview_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_rels" ADD CONSTRAINT "course_overview_rels_courses_fk" FOREIGN KEY ("courses_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "course_overview_rels" ADD CONSTRAINT "course_overview_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_cta_buttons_order_idx" ON "pages_blocks_cta_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_buttons_parent_id_idx" ON "pages_blocks_cta_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_form_idx" ON "pages_blocks_cta" USING btree ("form_id");
  CREATE INDEX "pages_blocks_cta_image_idx" ON "pages_blocks_cta" USING btree ("image_id");
  CREATE INDEX "pages_blocks_content_columns_order_idx" ON "pages_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_columns_parent_id_idx" ON "pages_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_order_idx" ON "pages_blocks_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_path_idx" ON "pages_blocks_content" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_block_order_idx" ON "pages_blocks_media_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_block_parent_id_idx" ON "pages_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_block_path_idx" ON "pages_blocks_media_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_block_media_idx" ON "pages_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "pages_blocks_archive_order_idx" ON "pages_blocks_archive" USING btree ("_order");
  CREATE INDEX "pages_blocks_archive_parent_id_idx" ON "pages_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_archive_path_idx" ON "pages_blocks_archive" USING btree ("_path");
  CREATE INDEX "pages_blocks_form_block_order_idx" ON "pages_blocks_form_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_block_parent_id_idx" ON "pages_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_form_block_path_idx" ON "pages_blocks_form_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_form_block_form_idx" ON "pages_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "pages_blocks_faq_faqs_order_idx" ON "pages_blocks_faq_faqs" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_faqs_parent_id_idx" ON "pages_blocks_faq_faqs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_order_idx" ON "pages_blocks_faq" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_parent_id_idx" ON "pages_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_path_idx" ON "pages_blocks_faq" USING btree ("_path");
  CREATE INDEX "pages_blocks_team_members_social_links_order_idx" ON "pages_blocks_team_members_social_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_team_members_social_links_parent_id_idx" ON "pages_blocks_team_members_social_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_team_members_order_idx" ON "pages_blocks_team_members" USING btree ("_order");
  CREATE INDEX "pages_blocks_team_members_parent_id_idx" ON "pages_blocks_team_members" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_team_members_avatar_idx" ON "pages_blocks_team_members" USING btree ("avatar_id");
  CREATE INDEX "pages_blocks_team_order_idx" ON "pages_blocks_team" USING btree ("_order");
  CREATE INDEX "pages_blocks_team_parent_id_idx" ON "pages_blocks_team" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_team_path_idx" ON "pages_blocks_team" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonials_testimonials_order_idx" ON "pages_blocks_testimonials_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_testimonials_parent_id_idx" ON "pages_blocks_testimonials_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_testimonials_author_author_ava_idx" ON "pages_blocks_testimonials_testimonials" USING btree ("author_avatar_id");
  CREATE INDEX "pages_blocks_testimonials_testimonials_company_logo_idx" ON "pages_blocks_testimonials_testimonials" USING btree ("company_logo_id");
  CREATE INDEX "pages_blocks_testimonials_order_idx" ON "pages_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_parent_id_idx" ON "pages_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_path_idx" ON "pages_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "pages_blocks_pricing_table_plans_features_order_idx" ON "pages_blocks_pricing_table_plans_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_table_plans_features_parent_id_idx" ON "pages_blocks_pricing_table_plans_features" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_table_plans_order_idx" ON "pages_blocks_pricing_table_plans" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_table_plans_parent_id_idx" ON "pages_blocks_pricing_table_plans" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_table_order_idx" ON "pages_blocks_pricing_table" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_table_parent_id_idx" ON "pages_blocks_pricing_table" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_table_path_idx" ON "pages_blocks_pricing_table" USING btree ("_path");
  CREATE INDEX "pages_blocks_two_column_layout_buttons_order_idx" ON "pages_blocks_two_column_layout_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_two_column_layout_buttons_parent_id_idx" ON "pages_blocks_two_column_layout_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_two_column_layout_order_idx" ON "pages_blocks_two_column_layout" USING btree ("_order");
  CREATE INDEX "pages_blocks_two_column_layout_parent_id_idx" ON "pages_blocks_two_column_layout" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_two_column_layout_path_idx" ON "pages_blocks_two_column_layout" USING btree ("_path");
  CREATE INDEX "pages_blocks_two_column_layout_image_idx" ON "pages_blocks_two_column_layout" USING btree ("image_id");
  CREATE INDEX "pages_blocks_feature_grid_features_order_idx" ON "pages_blocks_feature_grid_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_grid_features_parent_id_idx" ON "pages_blocks_feature_grid_features" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_grid_features_icon_idx" ON "pages_blocks_feature_grid_features" USING btree ("icon_id");
  CREATE INDEX "pages_blocks_feature_grid_features_image_idx" ON "pages_blocks_feature_grid_features" USING btree ("image_id");
  CREATE INDEX "pages_blocks_feature_grid_bottom_buttons_order_idx" ON "pages_blocks_feature_grid_bottom_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_grid_bottom_buttons_parent_id_idx" ON "pages_blocks_feature_grid_bottom_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_grid_order_idx" ON "pages_blocks_feature_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature_grid_parent_id_idx" ON "pages_blocks_feature_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature_grid_path_idx" ON "pages_blocks_feature_grid" USING btree ("_path");
  CREATE INDEX "pages_blocks_header_buttons_order_idx" ON "pages_blocks_header_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_header_buttons_parent_id_idx" ON "pages_blocks_header_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_header_order_idx" ON "pages_blocks_header" USING btree ("_order");
  CREATE INDEX "pages_blocks_header_parent_id_idx" ON "pages_blocks_header" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_header_path_idx" ON "pages_blocks_header" USING btree ("_path");
  CREATE INDEX "pages_blocks_header_image_idx" ON "pages_blocks_header" USING btree ("image_id");
  CREATE INDEX "pages_blocks_gallery_images_order_idx" ON "pages_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_images_parent_id_idx" ON "pages_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_images_image_idx" ON "pages_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "pages_blocks_gallery_order_idx" ON "pages_blocks_gallery" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_parent_id_idx" ON "pages_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_path_idx" ON "pages_blocks_gallery" USING btree ("_path");
  CREATE INDEX "pages_blocks_contact_info_methods_order_idx" ON "pages_blocks_contact_info_methods" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_info_methods_parent_id_idx" ON "pages_blocks_contact_info_methods" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_info_order_idx" ON "pages_blocks_contact_info" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_info_parent_id_idx" ON "pages_blocks_contact_info" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_info_path_idx" ON "pages_blocks_contact_info" USING btree ("_path");
  CREATE INDEX "pages_blocks_blog_grid_categories_order_idx" ON "pages_blocks_blog_grid_categories" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog_grid_categories_parent_id_idx" ON "pages_blocks_blog_grid_categories" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog_grid_posts_order_idx" ON "pages_blocks_blog_grid_posts" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog_grid_posts_parent_id_idx" ON "pages_blocks_blog_grid_posts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog_grid_posts_image_idx" ON "pages_blocks_blog_grid_posts" USING btree ("image_id");
  CREATE INDEX "pages_blocks_blog_grid_order_idx" ON "pages_blocks_blog_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog_grid_parent_id_idx" ON "pages_blocks_blog_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog_grid_path_idx" ON "pages_blocks_blog_grid" USING btree ("_path");
  CREATE INDEX "pages_blocks_dynamic_blog_grid_order_idx" ON "pages_blocks_dynamic_blog_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_dynamic_blog_grid_parent_id_idx" ON "pages_blocks_dynamic_blog_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_dynamic_blog_grid_path_idx" ON "pages_blocks_dynamic_blog_grid" USING btree ("_path");
  CREATE INDEX "pages_blocks_dynamic_blog_grid_category_filter_idx" ON "pages_blocks_dynamic_blog_grid" USING btree ("category_filter_id");
  CREATE INDEX "pages_blocks_logo_list_logos_order_idx" ON "pages_blocks_logo_list_logos" USING btree ("_order");
  CREATE INDEX "pages_blocks_logo_list_logos_parent_id_idx" ON "pages_blocks_logo_list_logos" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_logo_list_logos_logo_idx" ON "pages_blocks_logo_list_logos" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_logo_list_order_idx" ON "pages_blocks_logo_list" USING btree ("_order");
  CREATE INDEX "pages_blocks_logo_list_parent_id_idx" ON "pages_blocks_logo_list" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_logo_list_path_idx" ON "pages_blocks_logo_list" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout90_block_order_idx" ON "pages_blocks_layout90_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout90_block_parent_id_idx" ON "pages_blocks_layout90_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout90_block_path_idx" ON "pages_blocks_layout90_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout90_block_image_idx" ON "pages_blocks_layout90_block" USING btree ("image_id");
  CREATE INDEX "pages_blocks_layout10_block_sub_headings_order_idx" ON "pages_blocks_layout10_block_sub_headings" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout10_block_sub_headings_parent_id_idx" ON "pages_blocks_layout10_block_sub_headings" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout10_block_sub_headings_icon_idx" ON "pages_blocks_layout10_block_sub_headings" USING btree ("icon_id");
  CREATE INDEX "pages_blocks_layout10_block_buttons_order_idx" ON "pages_blocks_layout10_block_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout10_block_buttons_parent_id_idx" ON "pages_blocks_layout10_block_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout10_block_order_idx" ON "pages_blocks_layout10_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout10_block_parent_id_idx" ON "pages_blocks_layout10_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout10_block_path_idx" ON "pages_blocks_layout10_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout10_block_image_idx" ON "pages_blocks_layout10_block" USING btree ("image_id");
  CREATE INDEX "pages_blocks_layout102_block_sub_headings_order_idx" ON "pages_blocks_layout102_block_sub_headings" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout102_block_sub_headings_parent_id_idx" ON "pages_blocks_layout102_block_sub_headings" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout102_block_sub_headings_icon_idx" ON "pages_blocks_layout102_block_sub_headings" USING btree ("icon_id");
  CREATE INDEX "pages_blocks_layout102_block_order_idx" ON "pages_blocks_layout102_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout102_block_parent_id_idx" ON "pages_blocks_layout102_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout102_block_path_idx" ON "pages_blocks_layout102_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout102_block_image_idx" ON "pages_blocks_layout102_block" USING btree ("image_id");
  CREATE INDEX "pages_blocks_layout245_block_sections_order_idx" ON "pages_blocks_layout245_block_sections" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout245_block_sections_parent_id_idx" ON "pages_blocks_layout245_block_sections" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout245_block_sections_icon_idx" ON "pages_blocks_layout245_block_sections" USING btree ("icon_id");
  CREATE INDEX "pages_blocks_layout245_block_buttons_order_idx" ON "pages_blocks_layout245_block_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout245_block_buttons_parent_id_idx" ON "pages_blocks_layout245_block_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout245_block_order_idx" ON "pages_blocks_layout245_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout245_block_parent_id_idx" ON "pages_blocks_layout245_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout245_block_path_idx" ON "pages_blocks_layout245_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout216_block_stats_order_idx" ON "pages_blocks_layout216_block_stats" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout216_block_stats_parent_id_idx" ON "pages_blocks_layout216_block_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout216_block_buttons_order_idx" ON "pages_blocks_layout216_block_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout216_block_buttons_parent_id_idx" ON "pages_blocks_layout216_block_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout216_block_order_idx" ON "pages_blocks_layout216_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout216_block_parent_id_idx" ON "pages_blocks_layout216_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout216_block_path_idx" ON "pages_blocks_layout216_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout216_block_image_idx" ON "pages_blocks_layout216_block" USING btree ("image_id");
  CREATE INDEX "pages_blocks_layout18_block_features_order_idx" ON "pages_blocks_layout18_block_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout18_block_features_parent_id_idx" ON "pages_blocks_layout18_block_features" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout18_block_features_icon_idx" ON "pages_blocks_layout18_block_features" USING btree ("icon_id");
  CREATE INDEX "pages_blocks_layout18_block_order_idx" ON "pages_blocks_layout18_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout18_block_parent_id_idx" ON "pages_blocks_layout18_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout18_block_path_idx" ON "pages_blocks_layout18_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout18_block_image_idx" ON "pages_blocks_layout18_block" USING btree ("image_id");
  CREATE INDEX "pages_blocks_layout13_block_logos_order_idx" ON "pages_blocks_layout13_block_logos" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout13_block_logos_parent_id_idx" ON "pages_blocks_layout13_block_logos" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout13_block_logos_logo_idx" ON "pages_blocks_layout13_block_logos" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_layout13_block_buttons_order_idx" ON "pages_blocks_layout13_block_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout13_block_buttons_parent_id_idx" ON "pages_blocks_layout13_block_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout13_block_order_idx" ON "pages_blocks_layout13_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout13_block_parent_id_idx" ON "pages_blocks_layout13_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout13_block_path_idx" ON "pages_blocks_layout13_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout13_block_image_idx" ON "pages_blocks_layout13_block" USING btree ("image_id");
  CREATE INDEX "pages_blocks_blog_post_header_breadcrumbs_order_idx" ON "pages_blocks_blog_post_header_breadcrumbs" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog_post_header_breadcrumbs_parent_id_idx" ON "pages_blocks_blog_post_header_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "bph_social_links_order_idx" ON "bph_social_links" USING btree ("_order");
  CREATE INDEX "bph_social_links_parent_id_idx" ON "bph_social_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog_post_header_order_idx" ON "pages_blocks_blog_post_header" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog_post_header_parent_id_idx" ON "pages_blocks_blog_post_header" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog_post_header_path_idx" ON "pages_blocks_blog_post_header" USING btree ("_path");
  CREATE INDEX "pages_blocks_blog_post_header_image_idx" ON "pages_blocks_blog_post_header" USING btree ("image_id");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX "pages_rels_blogs_id_idx" ON "pages_rels" USING btree ("blogs_id");
  CREATE INDEX "pages_rels_courses_id_idx" ON "pages_rels" USING btree ("courses_id");
  CREATE INDEX "pages_rels_categories_id_idx" ON "pages_rels" USING btree ("categories_id");
  CREATE INDEX "_pages_v_blocks_cta_buttons_order_idx" ON "_pages_v_blocks_cta_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_buttons_parent_id_idx" ON "_pages_v_blocks_cta_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta_form_idx" ON "_pages_v_blocks_cta" USING btree ("form_id");
  CREATE INDEX "_pages_v_blocks_cta_image_idx" ON "_pages_v_blocks_cta" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_content_columns_order_idx" ON "_pages_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_columns_parent_id_idx" ON "_pages_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_block_order_idx" ON "_pages_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_block_parent_id_idx" ON "_pages_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_block_path_idx" ON "_pages_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_block_media_idx" ON "_pages_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_archive_order_idx" ON "_pages_v_blocks_archive" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_archive_parent_id_idx" ON "_pages_v_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_archive_path_idx" ON "_pages_v_blocks_archive" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_form_block_order_idx" ON "_pages_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_form_block_parent_id_idx" ON "_pages_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_form_block_path_idx" ON "_pages_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_form_block_form_idx" ON "_pages_v_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "_pages_v_blocks_faq_faqs_order_idx" ON "_pages_v_blocks_faq_faqs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_faqs_parent_id_idx" ON "_pages_v_blocks_faq_faqs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_order_idx" ON "_pages_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_parent_id_idx" ON "_pages_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_path_idx" ON "_pages_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_team_members_social_links_order_idx" ON "_pages_v_blocks_team_members_social_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_team_members_social_links_parent_id_idx" ON "_pages_v_blocks_team_members_social_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_team_members_order_idx" ON "_pages_v_blocks_team_members" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_team_members_parent_id_idx" ON "_pages_v_blocks_team_members" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_team_members_avatar_idx" ON "_pages_v_blocks_team_members" USING btree ("avatar_id");
  CREATE INDEX "_pages_v_blocks_team_order_idx" ON "_pages_v_blocks_team" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_team_parent_id_idx" ON "_pages_v_blocks_team" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_team_path_idx" ON "_pages_v_blocks_team" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonials_testimonials_order_idx" ON "_pages_v_blocks_testimonials_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonials_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_testimonials_author_author__idx" ON "_pages_v_blocks_testimonials_testimonials" USING btree ("author_avatar_id");
  CREATE INDEX "_pages_v_blocks_testimonials_testimonials_company_logo_idx" ON "_pages_v_blocks_testimonials_testimonials" USING btree ("company_logo_id");
  CREATE INDEX "_pages_v_blocks_testimonials_order_idx" ON "_pages_v_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_path_idx" ON "_pages_v_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_pricing_table_plans_features_order_idx" ON "_pages_v_blocks_pricing_table_plans_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_table_plans_features_parent_id_idx" ON "_pages_v_blocks_pricing_table_plans_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_table_plans_order_idx" ON "_pages_v_blocks_pricing_table_plans" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_table_plans_parent_id_idx" ON "_pages_v_blocks_pricing_table_plans" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_table_order_idx" ON "_pages_v_blocks_pricing_table" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_table_parent_id_idx" ON "_pages_v_blocks_pricing_table" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_table_path_idx" ON "_pages_v_blocks_pricing_table" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_two_column_layout_buttons_order_idx" ON "_pages_v_blocks_two_column_layout_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_two_column_layout_buttons_parent_id_idx" ON "_pages_v_blocks_two_column_layout_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_two_column_layout_order_idx" ON "_pages_v_blocks_two_column_layout" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_two_column_layout_parent_id_idx" ON "_pages_v_blocks_two_column_layout" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_two_column_layout_path_idx" ON "_pages_v_blocks_two_column_layout" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_two_column_layout_image_idx" ON "_pages_v_blocks_two_column_layout" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_feature_grid_features_order_idx" ON "_pages_v_blocks_feature_grid_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_grid_features_parent_id_idx" ON "_pages_v_blocks_feature_grid_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_grid_features_icon_idx" ON "_pages_v_blocks_feature_grid_features" USING btree ("icon_id");
  CREATE INDEX "_pages_v_blocks_feature_grid_features_image_idx" ON "_pages_v_blocks_feature_grid_features" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_feature_grid_bottom_buttons_order_idx" ON "_pages_v_blocks_feature_grid_bottom_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_grid_bottom_buttons_parent_id_idx" ON "_pages_v_blocks_feature_grid_bottom_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_grid_order_idx" ON "_pages_v_blocks_feature_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature_grid_parent_id_idx" ON "_pages_v_blocks_feature_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature_grid_path_idx" ON "_pages_v_blocks_feature_grid" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_header_buttons_order_idx" ON "_pages_v_blocks_header_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_header_buttons_parent_id_idx" ON "_pages_v_blocks_header_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_header_order_idx" ON "_pages_v_blocks_header" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_header_parent_id_idx" ON "_pages_v_blocks_header" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_header_path_idx" ON "_pages_v_blocks_header" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_header_image_idx" ON "_pages_v_blocks_header" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_gallery_images_order_idx" ON "_pages_v_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_gallery_images_parent_id_idx" ON "_pages_v_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery_images_image_idx" ON "_pages_v_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_gallery_order_idx" ON "_pages_v_blocks_gallery" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_gallery_parent_id_idx" ON "_pages_v_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery_path_idx" ON "_pages_v_blocks_gallery" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_contact_info_methods_order_idx" ON "_pages_v_blocks_contact_info_methods" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact_info_methods_parent_id_idx" ON "_pages_v_blocks_contact_info_methods" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_info_order_idx" ON "_pages_v_blocks_contact_info" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact_info_parent_id_idx" ON "_pages_v_blocks_contact_info" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_info_path_idx" ON "_pages_v_blocks_contact_info" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_blog_grid_categories_order_idx" ON "_pages_v_blocks_blog_grid_categories" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog_grid_categories_parent_id_idx" ON "_pages_v_blocks_blog_grid_categories" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog_grid_posts_order_idx" ON "_pages_v_blocks_blog_grid_posts" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog_grid_posts_parent_id_idx" ON "_pages_v_blocks_blog_grid_posts" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog_grid_posts_image_idx" ON "_pages_v_blocks_blog_grid_posts" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_blog_grid_order_idx" ON "_pages_v_blocks_blog_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog_grid_parent_id_idx" ON "_pages_v_blocks_blog_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog_grid_path_idx" ON "_pages_v_blocks_blog_grid" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dynamic_blog_grid_order_idx" ON "_pages_v_blocks_dynamic_blog_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_dynamic_blog_grid_parent_id_idx" ON "_pages_v_blocks_dynamic_blog_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_dynamic_blog_grid_path_idx" ON "_pages_v_blocks_dynamic_blog_grid" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_dynamic_blog_grid_category_filter_idx" ON "_pages_v_blocks_dynamic_blog_grid" USING btree ("category_filter_id");
  CREATE INDEX "_pages_v_blocks_logo_list_logos_order_idx" ON "_pages_v_blocks_logo_list_logos" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_logo_list_logos_parent_id_idx" ON "_pages_v_blocks_logo_list_logos" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_logo_list_logos_logo_idx" ON "_pages_v_blocks_logo_list_logos" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_logo_list_order_idx" ON "_pages_v_blocks_logo_list" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_logo_list_parent_id_idx" ON "_pages_v_blocks_logo_list" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_logo_list_path_idx" ON "_pages_v_blocks_logo_list" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout90_block_order_idx" ON "_pages_v_blocks_layout90_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout90_block_parent_id_idx" ON "_pages_v_blocks_layout90_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout90_block_path_idx" ON "_pages_v_blocks_layout90_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout90_block_image_idx" ON "_pages_v_blocks_layout90_block" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_layout10_block_sub_headings_order_idx" ON "_pages_v_blocks_layout10_block_sub_headings" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout10_block_sub_headings_parent_id_idx" ON "_pages_v_blocks_layout10_block_sub_headings" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout10_block_sub_headings_icon_idx" ON "_pages_v_blocks_layout10_block_sub_headings" USING btree ("icon_id");
  CREATE INDEX "_pages_v_blocks_layout10_block_buttons_order_idx" ON "_pages_v_blocks_layout10_block_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout10_block_buttons_parent_id_idx" ON "_pages_v_blocks_layout10_block_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout10_block_order_idx" ON "_pages_v_blocks_layout10_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout10_block_parent_id_idx" ON "_pages_v_blocks_layout10_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout10_block_path_idx" ON "_pages_v_blocks_layout10_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout10_block_image_idx" ON "_pages_v_blocks_layout10_block" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_layout102_block_sub_headings_order_idx" ON "_pages_v_blocks_layout102_block_sub_headings" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout102_block_sub_headings_parent_id_idx" ON "_pages_v_blocks_layout102_block_sub_headings" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout102_block_sub_headings_icon_idx" ON "_pages_v_blocks_layout102_block_sub_headings" USING btree ("icon_id");
  CREATE INDEX "_pages_v_blocks_layout102_block_order_idx" ON "_pages_v_blocks_layout102_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout102_block_parent_id_idx" ON "_pages_v_blocks_layout102_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout102_block_path_idx" ON "_pages_v_blocks_layout102_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout102_block_image_idx" ON "_pages_v_blocks_layout102_block" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_layout245_block_sections_order_idx" ON "_pages_v_blocks_layout245_block_sections" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout245_block_sections_parent_id_idx" ON "_pages_v_blocks_layout245_block_sections" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout245_block_sections_icon_idx" ON "_pages_v_blocks_layout245_block_sections" USING btree ("icon_id");
  CREATE INDEX "_pages_v_blocks_layout245_block_buttons_order_idx" ON "_pages_v_blocks_layout245_block_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout245_block_buttons_parent_id_idx" ON "_pages_v_blocks_layout245_block_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout245_block_order_idx" ON "_pages_v_blocks_layout245_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout245_block_parent_id_idx" ON "_pages_v_blocks_layout245_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout245_block_path_idx" ON "_pages_v_blocks_layout245_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout216_block_stats_order_idx" ON "_pages_v_blocks_layout216_block_stats" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout216_block_stats_parent_id_idx" ON "_pages_v_blocks_layout216_block_stats" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout216_block_buttons_order_idx" ON "_pages_v_blocks_layout216_block_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout216_block_buttons_parent_id_idx" ON "_pages_v_blocks_layout216_block_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout216_block_order_idx" ON "_pages_v_blocks_layout216_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout216_block_parent_id_idx" ON "_pages_v_blocks_layout216_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout216_block_path_idx" ON "_pages_v_blocks_layout216_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout216_block_image_idx" ON "_pages_v_blocks_layout216_block" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_layout18_block_features_order_idx" ON "_pages_v_blocks_layout18_block_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout18_block_features_parent_id_idx" ON "_pages_v_blocks_layout18_block_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout18_block_features_icon_idx" ON "_pages_v_blocks_layout18_block_features" USING btree ("icon_id");
  CREATE INDEX "_pages_v_blocks_layout18_block_order_idx" ON "_pages_v_blocks_layout18_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout18_block_parent_id_idx" ON "_pages_v_blocks_layout18_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout18_block_path_idx" ON "_pages_v_blocks_layout18_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout18_block_image_idx" ON "_pages_v_blocks_layout18_block" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_layout13_block_logos_order_idx" ON "_pages_v_blocks_layout13_block_logos" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout13_block_logos_parent_id_idx" ON "_pages_v_blocks_layout13_block_logos" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout13_block_logos_logo_idx" ON "_pages_v_blocks_layout13_block_logos" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_layout13_block_buttons_order_idx" ON "_pages_v_blocks_layout13_block_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout13_block_buttons_parent_id_idx" ON "_pages_v_blocks_layout13_block_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout13_block_order_idx" ON "_pages_v_blocks_layout13_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout13_block_parent_id_idx" ON "_pages_v_blocks_layout13_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout13_block_path_idx" ON "_pages_v_blocks_layout13_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout13_block_image_idx" ON "_pages_v_blocks_layout13_block" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_blog_post_header_breadcrumbs_order_idx" ON "_pages_v_blocks_blog_post_header_breadcrumbs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog_post_header_breadcrumbs_parent_id_idx" ON "_pages_v_blocks_blog_post_header_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "_bph_social_links_v_order_idx" ON "_bph_social_links_v" USING btree ("_order");
  CREATE INDEX "_bph_social_links_v_parent_id_idx" ON "_bph_social_links_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog_post_header_order_idx" ON "_pages_v_blocks_blog_post_header" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog_post_header_parent_id_idx" ON "_pages_v_blocks_blog_post_header" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog_post_header_path_idx" ON "_pages_v_blocks_blog_post_header" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_blog_post_header_image_idx" ON "_pages_v_blocks_blog_post_header" USING btree ("image_id");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX "_pages_v_rels_blogs_id_idx" ON "_pages_v_rels" USING btree ("blogs_id");
  CREATE INDEX "_pages_v_rels_courses_id_idx" ON "_pages_v_rels" USING btree ("courses_id");
  CREATE INDEX "_pages_v_rels_categories_id_idx" ON "_pages_v_rels" USING btree ("categories_id");
  CREATE INDEX "blogs_blocks_cta_buttons_order_idx" ON "blogs_blocks_cta_buttons" USING btree ("_order");
  CREATE INDEX "blogs_blocks_cta_buttons_parent_id_idx" ON "blogs_blocks_cta_buttons" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_cta_order_idx" ON "blogs_blocks_cta" USING btree ("_order");
  CREATE INDEX "blogs_blocks_cta_parent_id_idx" ON "blogs_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_cta_path_idx" ON "blogs_blocks_cta" USING btree ("_path");
  CREATE INDEX "blogs_blocks_cta_form_idx" ON "blogs_blocks_cta" USING btree ("form_id");
  CREATE INDEX "blogs_blocks_cta_image_idx" ON "blogs_blocks_cta" USING btree ("image_id");
  CREATE INDEX "blogs_blocks_content_columns_order_idx" ON "blogs_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "blogs_blocks_content_columns_parent_id_idx" ON "blogs_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_content_order_idx" ON "blogs_blocks_content" USING btree ("_order");
  CREATE INDEX "blogs_blocks_content_parent_id_idx" ON "blogs_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_content_path_idx" ON "blogs_blocks_content" USING btree ("_path");
  CREATE INDEX "blogs_blocks_media_block_order_idx" ON "blogs_blocks_media_block" USING btree ("_order");
  CREATE INDEX "blogs_blocks_media_block_parent_id_idx" ON "blogs_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_media_block_path_idx" ON "blogs_blocks_media_block" USING btree ("_path");
  CREATE INDEX "blogs_blocks_media_block_media_idx" ON "blogs_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "blogs_blocks_archive_order_idx" ON "blogs_blocks_archive" USING btree ("_order");
  CREATE INDEX "blogs_blocks_archive_parent_id_idx" ON "blogs_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_archive_path_idx" ON "blogs_blocks_archive" USING btree ("_path");
  CREATE INDEX "blogs_blocks_form_block_order_idx" ON "blogs_blocks_form_block" USING btree ("_order");
  CREATE INDEX "blogs_blocks_form_block_parent_id_idx" ON "blogs_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_form_block_path_idx" ON "blogs_blocks_form_block" USING btree ("_path");
  CREATE INDEX "blogs_blocks_form_block_form_idx" ON "blogs_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "blogs_blocks_faq_faqs_order_idx" ON "blogs_blocks_faq_faqs" USING btree ("_order");
  CREATE INDEX "blogs_blocks_faq_faqs_parent_id_idx" ON "blogs_blocks_faq_faqs" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_faq_order_idx" ON "blogs_blocks_faq" USING btree ("_order");
  CREATE INDEX "blogs_blocks_faq_parent_id_idx" ON "blogs_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_faq_path_idx" ON "blogs_blocks_faq" USING btree ("_path");
  CREATE INDEX "blogs_blocks_team_members_social_links_order_idx" ON "blogs_blocks_team_members_social_links" USING btree ("_order");
  CREATE INDEX "blogs_blocks_team_members_social_links_parent_id_idx" ON "blogs_blocks_team_members_social_links" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_team_members_order_idx" ON "blogs_blocks_team_members" USING btree ("_order");
  CREATE INDEX "blogs_blocks_team_members_parent_id_idx" ON "blogs_blocks_team_members" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_team_members_avatar_idx" ON "blogs_blocks_team_members" USING btree ("avatar_id");
  CREATE INDEX "blogs_blocks_team_order_idx" ON "blogs_blocks_team" USING btree ("_order");
  CREATE INDEX "blogs_blocks_team_parent_id_idx" ON "blogs_blocks_team" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_team_path_idx" ON "blogs_blocks_team" USING btree ("_path");
  CREATE INDEX "blogs_blocks_testimonials_testimonials_order_idx" ON "blogs_blocks_testimonials_testimonials" USING btree ("_order");
  CREATE INDEX "blogs_blocks_testimonials_testimonials_parent_id_idx" ON "blogs_blocks_testimonials_testimonials" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_testimonials_testimonials_author_author_ava_idx" ON "blogs_blocks_testimonials_testimonials" USING btree ("author_avatar_id");
  CREATE INDEX "blogs_blocks_testimonials_testimonials_company_logo_idx" ON "blogs_blocks_testimonials_testimonials" USING btree ("company_logo_id");
  CREATE INDEX "blogs_blocks_testimonials_order_idx" ON "blogs_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "blogs_blocks_testimonials_parent_id_idx" ON "blogs_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_testimonials_path_idx" ON "blogs_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "blogs_blocks_pricing_table_plans_features_order_idx" ON "blogs_blocks_pricing_table_plans_features" USING btree ("_order");
  CREATE INDEX "blogs_blocks_pricing_table_plans_features_parent_id_idx" ON "blogs_blocks_pricing_table_plans_features" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_pricing_table_plans_order_idx" ON "blogs_blocks_pricing_table_plans" USING btree ("_order");
  CREATE INDEX "blogs_blocks_pricing_table_plans_parent_id_idx" ON "blogs_blocks_pricing_table_plans" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_pricing_table_order_idx" ON "blogs_blocks_pricing_table" USING btree ("_order");
  CREATE INDEX "blogs_blocks_pricing_table_parent_id_idx" ON "blogs_blocks_pricing_table" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_pricing_table_path_idx" ON "blogs_blocks_pricing_table" USING btree ("_path");
  CREATE INDEX "blogs_blocks_two_column_layout_buttons_order_idx" ON "blogs_blocks_two_column_layout_buttons" USING btree ("_order");
  CREATE INDEX "blogs_blocks_two_column_layout_buttons_parent_id_idx" ON "blogs_blocks_two_column_layout_buttons" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_two_column_layout_order_idx" ON "blogs_blocks_two_column_layout" USING btree ("_order");
  CREATE INDEX "blogs_blocks_two_column_layout_parent_id_idx" ON "blogs_blocks_two_column_layout" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_two_column_layout_path_idx" ON "blogs_blocks_two_column_layout" USING btree ("_path");
  CREATE INDEX "blogs_blocks_two_column_layout_image_idx" ON "blogs_blocks_two_column_layout" USING btree ("image_id");
  CREATE INDEX "blogs_blocks_feature_grid_features_order_idx" ON "blogs_blocks_feature_grid_features" USING btree ("_order");
  CREATE INDEX "blogs_blocks_feature_grid_features_parent_id_idx" ON "blogs_blocks_feature_grid_features" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_feature_grid_features_icon_idx" ON "blogs_blocks_feature_grid_features" USING btree ("icon_id");
  CREATE INDEX "blogs_blocks_feature_grid_features_image_idx" ON "blogs_blocks_feature_grid_features" USING btree ("image_id");
  CREATE INDEX "blogs_blocks_feature_grid_bottom_buttons_order_idx" ON "blogs_blocks_feature_grid_bottom_buttons" USING btree ("_order");
  CREATE INDEX "blogs_blocks_feature_grid_bottom_buttons_parent_id_idx" ON "blogs_blocks_feature_grid_bottom_buttons" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_feature_grid_order_idx" ON "blogs_blocks_feature_grid" USING btree ("_order");
  CREATE INDEX "blogs_blocks_feature_grid_parent_id_idx" ON "blogs_blocks_feature_grid" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_feature_grid_path_idx" ON "blogs_blocks_feature_grid" USING btree ("_path");
  CREATE INDEX "blogs_blocks_header_buttons_order_idx" ON "blogs_blocks_header_buttons" USING btree ("_order");
  CREATE INDEX "blogs_blocks_header_buttons_parent_id_idx" ON "blogs_blocks_header_buttons" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_header_order_idx" ON "blogs_blocks_header" USING btree ("_order");
  CREATE INDEX "blogs_blocks_header_parent_id_idx" ON "blogs_blocks_header" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_header_path_idx" ON "blogs_blocks_header" USING btree ("_path");
  CREATE INDEX "blogs_blocks_header_image_idx" ON "blogs_blocks_header" USING btree ("image_id");
  CREATE INDEX "blogs_blocks_gallery_images_order_idx" ON "blogs_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "blogs_blocks_gallery_images_parent_id_idx" ON "blogs_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_gallery_images_image_idx" ON "blogs_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "blogs_blocks_gallery_order_idx" ON "blogs_blocks_gallery" USING btree ("_order");
  CREATE INDEX "blogs_blocks_gallery_parent_id_idx" ON "blogs_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_gallery_path_idx" ON "blogs_blocks_gallery" USING btree ("_path");
  CREATE INDEX "blogs_blocks_contact_info_methods_order_idx" ON "blogs_blocks_contact_info_methods" USING btree ("_order");
  CREATE INDEX "blogs_blocks_contact_info_methods_parent_id_idx" ON "blogs_blocks_contact_info_methods" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_contact_info_order_idx" ON "blogs_blocks_contact_info" USING btree ("_order");
  CREATE INDEX "blogs_blocks_contact_info_parent_id_idx" ON "blogs_blocks_contact_info" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_contact_info_path_idx" ON "blogs_blocks_contact_info" USING btree ("_path");
  CREATE INDEX "blogs_blocks_blog_grid_categories_order_idx" ON "blogs_blocks_blog_grid_categories" USING btree ("_order");
  CREATE INDEX "blogs_blocks_blog_grid_categories_parent_id_idx" ON "blogs_blocks_blog_grid_categories" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_blog_grid_posts_order_idx" ON "blogs_blocks_blog_grid_posts" USING btree ("_order");
  CREATE INDEX "blogs_blocks_blog_grid_posts_parent_id_idx" ON "blogs_blocks_blog_grid_posts" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_blog_grid_posts_image_idx" ON "blogs_blocks_blog_grid_posts" USING btree ("image_id");
  CREATE INDEX "blogs_blocks_blog_grid_order_idx" ON "blogs_blocks_blog_grid" USING btree ("_order");
  CREATE INDEX "blogs_blocks_blog_grid_parent_id_idx" ON "blogs_blocks_blog_grid" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_blog_grid_path_idx" ON "blogs_blocks_blog_grid" USING btree ("_path");
  CREATE INDEX "blogs_blocks_dynamic_blog_grid_order_idx" ON "blogs_blocks_dynamic_blog_grid" USING btree ("_order");
  CREATE INDEX "blogs_blocks_dynamic_blog_grid_parent_id_idx" ON "blogs_blocks_dynamic_blog_grid" USING btree ("_parent_id");
  CREATE INDEX "blogs_blocks_dynamic_blog_grid_path_idx" ON "blogs_blocks_dynamic_blog_grid" USING btree ("_path");
  CREATE INDEX "blogs_blocks_dynamic_blog_grid_category_filter_idx" ON "blogs_blocks_dynamic_blog_grid" USING btree ("category_filter_id");
  CREATE INDEX "blogs_populated_authors_order_idx" ON "blogs_populated_authors" USING btree ("_order");
  CREATE INDEX "blogs_populated_authors_parent_id_idx" ON "blogs_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "blogs_hero_image_idx" ON "blogs" USING btree ("hero_image_id");
  CREATE INDEX "blogs_meta_meta_image_idx" ON "blogs" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "blogs_slug_idx" ON "blogs" USING btree ("slug");
  CREATE INDEX "blogs_updated_at_idx" ON "blogs" USING btree ("updated_at");
  CREATE INDEX "blogs_created_at_idx" ON "blogs" USING btree ("created_at");
  CREATE INDEX "blogs__status_idx" ON "blogs" USING btree ("_status");
  CREATE INDEX "blogs_rels_order_idx" ON "blogs_rels" USING btree ("order");
  CREATE INDEX "blogs_rels_parent_idx" ON "blogs_rels" USING btree ("parent_id");
  CREATE INDEX "blogs_rels_path_idx" ON "blogs_rels" USING btree ("path");
  CREATE INDEX "blogs_rels_pages_id_idx" ON "blogs_rels" USING btree ("pages_id");
  CREATE INDEX "blogs_rels_blogs_id_idx" ON "blogs_rels" USING btree ("blogs_id");
  CREATE INDEX "blogs_rels_courses_id_idx" ON "blogs_rels" USING btree ("courses_id");
  CREATE INDEX "blogs_rels_categories_id_idx" ON "blogs_rels" USING btree ("categories_id");
  CREATE INDEX "blogs_rels_users_id_idx" ON "blogs_rels" USING btree ("users_id");
  CREATE INDEX "_blogs_v_blocks_cta_buttons_order_idx" ON "_blogs_v_blocks_cta_buttons" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_cta_buttons_parent_id_idx" ON "_blogs_v_blocks_cta_buttons" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_cta_order_idx" ON "_blogs_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_cta_parent_id_idx" ON "_blogs_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_cta_path_idx" ON "_blogs_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_blogs_v_blocks_cta_form_idx" ON "_blogs_v_blocks_cta" USING btree ("form_id");
  CREATE INDEX "_blogs_v_blocks_cta_image_idx" ON "_blogs_v_blocks_cta" USING btree ("image_id");
  CREATE INDEX "_blogs_v_blocks_content_columns_order_idx" ON "_blogs_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_content_columns_parent_id_idx" ON "_blogs_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_content_order_idx" ON "_blogs_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_content_parent_id_idx" ON "_blogs_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_content_path_idx" ON "_blogs_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_blogs_v_blocks_media_block_order_idx" ON "_blogs_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_media_block_parent_id_idx" ON "_blogs_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_media_block_path_idx" ON "_blogs_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX "_blogs_v_blocks_media_block_media_idx" ON "_blogs_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "_blogs_v_blocks_archive_order_idx" ON "_blogs_v_blocks_archive" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_archive_parent_id_idx" ON "_blogs_v_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_archive_path_idx" ON "_blogs_v_blocks_archive" USING btree ("_path");
  CREATE INDEX "_blogs_v_blocks_form_block_order_idx" ON "_blogs_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_form_block_parent_id_idx" ON "_blogs_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_form_block_path_idx" ON "_blogs_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX "_blogs_v_blocks_form_block_form_idx" ON "_blogs_v_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "_blogs_v_blocks_faq_faqs_order_idx" ON "_blogs_v_blocks_faq_faqs" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_faq_faqs_parent_id_idx" ON "_blogs_v_blocks_faq_faqs" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_faq_order_idx" ON "_blogs_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_faq_parent_id_idx" ON "_blogs_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_faq_path_idx" ON "_blogs_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_blogs_v_blocks_team_members_social_links_order_idx" ON "_blogs_v_blocks_team_members_social_links" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_team_members_social_links_parent_id_idx" ON "_blogs_v_blocks_team_members_social_links" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_team_members_order_idx" ON "_blogs_v_blocks_team_members" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_team_members_parent_id_idx" ON "_blogs_v_blocks_team_members" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_team_members_avatar_idx" ON "_blogs_v_blocks_team_members" USING btree ("avatar_id");
  CREATE INDEX "_blogs_v_blocks_team_order_idx" ON "_blogs_v_blocks_team" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_team_parent_id_idx" ON "_blogs_v_blocks_team" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_team_path_idx" ON "_blogs_v_blocks_team" USING btree ("_path");
  CREATE INDEX "_blogs_v_blocks_testimonials_testimonials_order_idx" ON "_blogs_v_blocks_testimonials_testimonials" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_testimonials_testimonials_parent_id_idx" ON "_blogs_v_blocks_testimonials_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_testimonials_testimonials_author_author__idx" ON "_blogs_v_blocks_testimonials_testimonials" USING btree ("author_avatar_id");
  CREATE INDEX "_blogs_v_blocks_testimonials_testimonials_company_logo_idx" ON "_blogs_v_blocks_testimonials_testimonials" USING btree ("company_logo_id");
  CREATE INDEX "_blogs_v_blocks_testimonials_order_idx" ON "_blogs_v_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_testimonials_parent_id_idx" ON "_blogs_v_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_testimonials_path_idx" ON "_blogs_v_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "_blogs_v_blocks_pricing_table_plans_features_order_idx" ON "_blogs_v_blocks_pricing_table_plans_features" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_pricing_table_plans_features_parent_id_idx" ON "_blogs_v_blocks_pricing_table_plans_features" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_pricing_table_plans_order_idx" ON "_blogs_v_blocks_pricing_table_plans" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_pricing_table_plans_parent_id_idx" ON "_blogs_v_blocks_pricing_table_plans" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_pricing_table_order_idx" ON "_blogs_v_blocks_pricing_table" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_pricing_table_parent_id_idx" ON "_blogs_v_blocks_pricing_table" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_pricing_table_path_idx" ON "_blogs_v_blocks_pricing_table" USING btree ("_path");
  CREATE INDEX "_blogs_v_blocks_two_column_layout_buttons_order_idx" ON "_blogs_v_blocks_two_column_layout_buttons" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_two_column_layout_buttons_parent_id_idx" ON "_blogs_v_blocks_two_column_layout_buttons" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_two_column_layout_order_idx" ON "_blogs_v_blocks_two_column_layout" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_two_column_layout_parent_id_idx" ON "_blogs_v_blocks_two_column_layout" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_two_column_layout_path_idx" ON "_blogs_v_blocks_two_column_layout" USING btree ("_path");
  CREATE INDEX "_blogs_v_blocks_two_column_layout_image_idx" ON "_blogs_v_blocks_two_column_layout" USING btree ("image_id");
  CREATE INDEX "_blogs_v_blocks_feature_grid_features_order_idx" ON "_blogs_v_blocks_feature_grid_features" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_feature_grid_features_parent_id_idx" ON "_blogs_v_blocks_feature_grid_features" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_feature_grid_features_icon_idx" ON "_blogs_v_blocks_feature_grid_features" USING btree ("icon_id");
  CREATE INDEX "_blogs_v_blocks_feature_grid_features_image_idx" ON "_blogs_v_blocks_feature_grid_features" USING btree ("image_id");
  CREATE INDEX "_blogs_v_blocks_feature_grid_bottom_buttons_order_idx" ON "_blogs_v_blocks_feature_grid_bottom_buttons" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_feature_grid_bottom_buttons_parent_id_idx" ON "_blogs_v_blocks_feature_grid_bottom_buttons" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_feature_grid_order_idx" ON "_blogs_v_blocks_feature_grid" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_feature_grid_parent_id_idx" ON "_blogs_v_blocks_feature_grid" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_feature_grid_path_idx" ON "_blogs_v_blocks_feature_grid" USING btree ("_path");
  CREATE INDEX "_blogs_v_blocks_header_buttons_order_idx" ON "_blogs_v_blocks_header_buttons" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_header_buttons_parent_id_idx" ON "_blogs_v_blocks_header_buttons" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_header_order_idx" ON "_blogs_v_blocks_header" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_header_parent_id_idx" ON "_blogs_v_blocks_header" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_header_path_idx" ON "_blogs_v_blocks_header" USING btree ("_path");
  CREATE INDEX "_blogs_v_blocks_header_image_idx" ON "_blogs_v_blocks_header" USING btree ("image_id");
  CREATE INDEX "_blogs_v_blocks_gallery_images_order_idx" ON "_blogs_v_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_gallery_images_parent_id_idx" ON "_blogs_v_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_gallery_images_image_idx" ON "_blogs_v_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "_blogs_v_blocks_gallery_order_idx" ON "_blogs_v_blocks_gallery" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_gallery_parent_id_idx" ON "_blogs_v_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_gallery_path_idx" ON "_blogs_v_blocks_gallery" USING btree ("_path");
  CREATE INDEX "_blogs_v_blocks_contact_info_methods_order_idx" ON "_blogs_v_blocks_contact_info_methods" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_contact_info_methods_parent_id_idx" ON "_blogs_v_blocks_contact_info_methods" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_contact_info_order_idx" ON "_blogs_v_blocks_contact_info" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_contact_info_parent_id_idx" ON "_blogs_v_blocks_contact_info" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_contact_info_path_idx" ON "_blogs_v_blocks_contact_info" USING btree ("_path");
  CREATE INDEX "_blogs_v_blocks_blog_grid_categories_order_idx" ON "_blogs_v_blocks_blog_grid_categories" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_blog_grid_categories_parent_id_idx" ON "_blogs_v_blocks_blog_grid_categories" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_blog_grid_posts_order_idx" ON "_blogs_v_blocks_blog_grid_posts" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_blog_grid_posts_parent_id_idx" ON "_blogs_v_blocks_blog_grid_posts" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_blog_grid_posts_image_idx" ON "_blogs_v_blocks_blog_grid_posts" USING btree ("image_id");
  CREATE INDEX "_blogs_v_blocks_blog_grid_order_idx" ON "_blogs_v_blocks_blog_grid" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_blog_grid_parent_id_idx" ON "_blogs_v_blocks_blog_grid" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_blog_grid_path_idx" ON "_blogs_v_blocks_blog_grid" USING btree ("_path");
  CREATE INDEX "_blogs_v_blocks_dynamic_blog_grid_order_idx" ON "_blogs_v_blocks_dynamic_blog_grid" USING btree ("_order");
  CREATE INDEX "_blogs_v_blocks_dynamic_blog_grid_parent_id_idx" ON "_blogs_v_blocks_dynamic_blog_grid" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_blocks_dynamic_blog_grid_path_idx" ON "_blogs_v_blocks_dynamic_blog_grid" USING btree ("_path");
  CREATE INDEX "_blogs_v_blocks_dynamic_blog_grid_category_filter_idx" ON "_blogs_v_blocks_dynamic_blog_grid" USING btree ("category_filter_id");
  CREATE INDEX "_blogs_v_version_populated_authors_order_idx" ON "_blogs_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX "_blogs_v_version_populated_authors_parent_id_idx" ON "_blogs_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "_blogs_v_parent_idx" ON "_blogs_v" USING btree ("parent_id");
  CREATE INDEX "_blogs_v_version_version_hero_image_idx" ON "_blogs_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_blogs_v_version_meta_version_meta_image_idx" ON "_blogs_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_blogs_v_version_version_slug_idx" ON "_blogs_v" USING btree ("version_slug");
  CREATE INDEX "_blogs_v_version_version_updated_at_idx" ON "_blogs_v" USING btree ("version_updated_at");
  CREATE INDEX "_blogs_v_version_version_created_at_idx" ON "_blogs_v" USING btree ("version_created_at");
  CREATE INDEX "_blogs_v_version_version__status_idx" ON "_blogs_v" USING btree ("version__status");
  CREATE INDEX "_blogs_v_created_at_idx" ON "_blogs_v" USING btree ("created_at");
  CREATE INDEX "_blogs_v_updated_at_idx" ON "_blogs_v" USING btree ("updated_at");
  CREATE INDEX "_blogs_v_latest_idx" ON "_blogs_v" USING btree ("latest");
  CREATE INDEX "_blogs_v_autosave_idx" ON "_blogs_v" USING btree ("autosave");
  CREATE INDEX "_blogs_v_rels_order_idx" ON "_blogs_v_rels" USING btree ("order");
  CREATE INDEX "_blogs_v_rels_parent_idx" ON "_blogs_v_rels" USING btree ("parent_id");
  CREATE INDEX "_blogs_v_rels_path_idx" ON "_blogs_v_rels" USING btree ("path");
  CREATE INDEX "_blogs_v_rels_pages_id_idx" ON "_blogs_v_rels" USING btree ("pages_id");
  CREATE INDEX "_blogs_v_rels_blogs_id_idx" ON "_blogs_v_rels" USING btree ("blogs_id");
  CREATE INDEX "_blogs_v_rels_courses_id_idx" ON "_blogs_v_rels" USING btree ("courses_id");
  CREATE INDEX "_blogs_v_rels_categories_id_idx" ON "_blogs_v_rels" USING btree ("categories_id");
  CREATE INDEX "_blogs_v_rels_users_id_idx" ON "_blogs_v_rels" USING btree ("users_id");
  CREATE INDEX "courses_blocks_cta_buttons_order_idx" ON "courses_blocks_cta_buttons" USING btree ("_order");
  CREATE INDEX "courses_blocks_cta_buttons_parent_id_idx" ON "courses_blocks_cta_buttons" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_cta_order_idx" ON "courses_blocks_cta" USING btree ("_order");
  CREATE INDEX "courses_blocks_cta_parent_id_idx" ON "courses_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_cta_path_idx" ON "courses_blocks_cta" USING btree ("_path");
  CREATE INDEX "courses_blocks_cta_form_idx" ON "courses_blocks_cta" USING btree ("form_id");
  CREATE INDEX "courses_blocks_cta_image_idx" ON "courses_blocks_cta" USING btree ("image_id");
  CREATE INDEX "courses_blocks_content_columns_order_idx" ON "courses_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "courses_blocks_content_columns_parent_id_idx" ON "courses_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_content_order_idx" ON "courses_blocks_content" USING btree ("_order");
  CREATE INDEX "courses_blocks_content_parent_id_idx" ON "courses_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_content_path_idx" ON "courses_blocks_content" USING btree ("_path");
  CREATE INDEX "courses_blocks_media_block_order_idx" ON "courses_blocks_media_block" USING btree ("_order");
  CREATE INDEX "courses_blocks_media_block_parent_id_idx" ON "courses_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_media_block_path_idx" ON "courses_blocks_media_block" USING btree ("_path");
  CREATE INDEX "courses_blocks_media_block_media_idx" ON "courses_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "courses_blocks_archive_order_idx" ON "courses_blocks_archive" USING btree ("_order");
  CREATE INDEX "courses_blocks_archive_parent_id_idx" ON "courses_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_archive_path_idx" ON "courses_blocks_archive" USING btree ("_path");
  CREATE INDEX "courses_blocks_form_block_order_idx" ON "courses_blocks_form_block" USING btree ("_order");
  CREATE INDEX "courses_blocks_form_block_parent_id_idx" ON "courses_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_form_block_path_idx" ON "courses_blocks_form_block" USING btree ("_path");
  CREATE INDEX "courses_blocks_form_block_form_idx" ON "courses_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "courses_blocks_faq_faqs_order_idx" ON "courses_blocks_faq_faqs" USING btree ("_order");
  CREATE INDEX "courses_blocks_faq_faqs_parent_id_idx" ON "courses_blocks_faq_faqs" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_faq_order_idx" ON "courses_blocks_faq" USING btree ("_order");
  CREATE INDEX "courses_blocks_faq_parent_id_idx" ON "courses_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_faq_path_idx" ON "courses_blocks_faq" USING btree ("_path");
  CREATE INDEX "courses_blocks_team_members_social_links_order_idx" ON "courses_blocks_team_members_social_links" USING btree ("_order");
  CREATE INDEX "courses_blocks_team_members_social_links_parent_id_idx" ON "courses_blocks_team_members_social_links" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_team_members_order_idx" ON "courses_blocks_team_members" USING btree ("_order");
  CREATE INDEX "courses_blocks_team_members_parent_id_idx" ON "courses_blocks_team_members" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_team_members_avatar_idx" ON "courses_blocks_team_members" USING btree ("avatar_id");
  CREATE INDEX "courses_blocks_team_order_idx" ON "courses_blocks_team" USING btree ("_order");
  CREATE INDEX "courses_blocks_team_parent_id_idx" ON "courses_blocks_team" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_team_path_idx" ON "courses_blocks_team" USING btree ("_path");
  CREATE INDEX "courses_blocks_testimonials_testimonials_order_idx" ON "courses_blocks_testimonials_testimonials" USING btree ("_order");
  CREATE INDEX "courses_blocks_testimonials_testimonials_parent_id_idx" ON "courses_blocks_testimonials_testimonials" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_testimonials_testimonials_author_author_a_idx" ON "courses_blocks_testimonials_testimonials" USING btree ("author_avatar_id");
  CREATE INDEX "courses_blocks_testimonials_testimonials_company_logo_idx" ON "courses_blocks_testimonials_testimonials" USING btree ("company_logo_id");
  CREATE INDEX "courses_blocks_testimonials_order_idx" ON "courses_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "courses_blocks_testimonials_parent_id_idx" ON "courses_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_testimonials_path_idx" ON "courses_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "courses_blocks_pricing_table_plans_features_order_idx" ON "courses_blocks_pricing_table_plans_features" USING btree ("_order");
  CREATE INDEX "courses_blocks_pricing_table_plans_features_parent_id_idx" ON "courses_blocks_pricing_table_plans_features" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_pricing_table_plans_order_idx" ON "courses_blocks_pricing_table_plans" USING btree ("_order");
  CREATE INDEX "courses_blocks_pricing_table_plans_parent_id_idx" ON "courses_blocks_pricing_table_plans" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_pricing_table_order_idx" ON "courses_blocks_pricing_table" USING btree ("_order");
  CREATE INDEX "courses_blocks_pricing_table_parent_id_idx" ON "courses_blocks_pricing_table" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_pricing_table_path_idx" ON "courses_blocks_pricing_table" USING btree ("_path");
  CREATE INDEX "courses_blocks_two_column_layout_buttons_order_idx" ON "courses_blocks_two_column_layout_buttons" USING btree ("_order");
  CREATE INDEX "courses_blocks_two_column_layout_buttons_parent_id_idx" ON "courses_blocks_two_column_layout_buttons" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_two_column_layout_order_idx" ON "courses_blocks_two_column_layout" USING btree ("_order");
  CREATE INDEX "courses_blocks_two_column_layout_parent_id_idx" ON "courses_blocks_two_column_layout" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_two_column_layout_path_idx" ON "courses_blocks_two_column_layout" USING btree ("_path");
  CREATE INDEX "courses_blocks_two_column_layout_image_idx" ON "courses_blocks_two_column_layout" USING btree ("image_id");
  CREATE INDEX "courses_blocks_feature_grid_features_order_idx" ON "courses_blocks_feature_grid_features" USING btree ("_order");
  CREATE INDEX "courses_blocks_feature_grid_features_parent_id_idx" ON "courses_blocks_feature_grid_features" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_feature_grid_features_icon_idx" ON "courses_blocks_feature_grid_features" USING btree ("icon_id");
  CREATE INDEX "courses_blocks_feature_grid_features_image_idx" ON "courses_blocks_feature_grid_features" USING btree ("image_id");
  CREATE INDEX "courses_blocks_feature_grid_bottom_buttons_order_idx" ON "courses_blocks_feature_grid_bottom_buttons" USING btree ("_order");
  CREATE INDEX "courses_blocks_feature_grid_bottom_buttons_parent_id_idx" ON "courses_blocks_feature_grid_bottom_buttons" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_feature_grid_order_idx" ON "courses_blocks_feature_grid" USING btree ("_order");
  CREATE INDEX "courses_blocks_feature_grid_parent_id_idx" ON "courses_blocks_feature_grid" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_feature_grid_path_idx" ON "courses_blocks_feature_grid" USING btree ("_path");
  CREATE INDEX "courses_blocks_header_buttons_order_idx" ON "courses_blocks_header_buttons" USING btree ("_order");
  CREATE INDEX "courses_blocks_header_buttons_parent_id_idx" ON "courses_blocks_header_buttons" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_header_order_idx" ON "courses_blocks_header" USING btree ("_order");
  CREATE INDEX "courses_blocks_header_parent_id_idx" ON "courses_blocks_header" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_header_path_idx" ON "courses_blocks_header" USING btree ("_path");
  CREATE INDEX "courses_blocks_header_image_idx" ON "courses_blocks_header" USING btree ("image_id");
  CREATE INDEX "courses_blocks_gallery_images_order_idx" ON "courses_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "courses_blocks_gallery_images_parent_id_idx" ON "courses_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_gallery_images_image_idx" ON "courses_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "courses_blocks_gallery_order_idx" ON "courses_blocks_gallery" USING btree ("_order");
  CREATE INDEX "courses_blocks_gallery_parent_id_idx" ON "courses_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_gallery_path_idx" ON "courses_blocks_gallery" USING btree ("_path");
  CREATE INDEX "courses_blocks_contact_info_methods_order_idx" ON "courses_blocks_contact_info_methods" USING btree ("_order");
  CREATE INDEX "courses_blocks_contact_info_methods_parent_id_idx" ON "courses_blocks_contact_info_methods" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_contact_info_order_idx" ON "courses_blocks_contact_info" USING btree ("_order");
  CREATE INDEX "courses_blocks_contact_info_parent_id_idx" ON "courses_blocks_contact_info" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_contact_info_path_idx" ON "courses_blocks_contact_info" USING btree ("_path");
  CREATE INDEX "courses_blocks_blog_grid_categories_order_idx" ON "courses_blocks_blog_grid_categories" USING btree ("_order");
  CREATE INDEX "courses_blocks_blog_grid_categories_parent_id_idx" ON "courses_blocks_blog_grid_categories" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_blog_grid_posts_order_idx" ON "courses_blocks_blog_grid_posts" USING btree ("_order");
  CREATE INDEX "courses_blocks_blog_grid_posts_parent_id_idx" ON "courses_blocks_blog_grid_posts" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_blog_grid_posts_image_idx" ON "courses_blocks_blog_grid_posts" USING btree ("image_id");
  CREATE INDEX "courses_blocks_blog_grid_order_idx" ON "courses_blocks_blog_grid" USING btree ("_order");
  CREATE INDEX "courses_blocks_blog_grid_parent_id_idx" ON "courses_blocks_blog_grid" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_blog_grid_path_idx" ON "courses_blocks_blog_grid" USING btree ("_path");
  CREATE INDEX "courses_blocks_dynamic_blog_grid_order_idx" ON "courses_blocks_dynamic_blog_grid" USING btree ("_order");
  CREATE INDEX "courses_blocks_dynamic_blog_grid_parent_id_idx" ON "courses_blocks_dynamic_blog_grid" USING btree ("_parent_id");
  CREATE INDEX "courses_blocks_dynamic_blog_grid_path_idx" ON "courses_blocks_dynamic_blog_grid" USING btree ("_path");
  CREATE INDEX "courses_blocks_dynamic_blog_grid_category_filter_idx" ON "courses_blocks_dynamic_blog_grid" USING btree ("category_filter_id");
  CREATE INDEX "courses_populated_authors_order_idx" ON "courses_populated_authors" USING btree ("_order");
  CREATE INDEX "courses_populated_authors_parent_id_idx" ON "courses_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "courses_hero_image_idx" ON "courses" USING btree ("hero_image_id");
  CREATE INDEX "courses_meta_meta_image_idx" ON "courses" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "courses_slug_idx" ON "courses" USING btree ("slug");
  CREATE INDEX "courses_updated_at_idx" ON "courses" USING btree ("updated_at");
  CREATE INDEX "courses_created_at_idx" ON "courses" USING btree ("created_at");
  CREATE INDEX "courses__status_idx" ON "courses" USING btree ("_status");
  CREATE INDEX "courses_rels_order_idx" ON "courses_rels" USING btree ("order");
  CREATE INDEX "courses_rels_parent_idx" ON "courses_rels" USING btree ("parent_id");
  CREATE INDEX "courses_rels_path_idx" ON "courses_rels" USING btree ("path");
  CREATE INDEX "courses_rels_pages_id_idx" ON "courses_rels" USING btree ("pages_id");
  CREATE INDEX "courses_rels_blogs_id_idx" ON "courses_rels" USING btree ("blogs_id");
  CREATE INDEX "courses_rels_courses_id_idx" ON "courses_rels" USING btree ("courses_id");
  CREATE INDEX "courses_rels_categories_id_idx" ON "courses_rels" USING btree ("categories_id");
  CREATE INDEX "courses_rels_users_id_idx" ON "courses_rels" USING btree ("users_id");
  CREATE INDEX "_courses_v_blocks_cta_buttons_order_idx" ON "_courses_v_blocks_cta_buttons" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_cta_buttons_parent_id_idx" ON "_courses_v_blocks_cta_buttons" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_cta_order_idx" ON "_courses_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_cta_parent_id_idx" ON "_courses_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_cta_path_idx" ON "_courses_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_courses_v_blocks_cta_form_idx" ON "_courses_v_blocks_cta" USING btree ("form_id");
  CREATE INDEX "_courses_v_blocks_cta_image_idx" ON "_courses_v_blocks_cta" USING btree ("image_id");
  CREATE INDEX "_courses_v_blocks_content_columns_order_idx" ON "_courses_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_content_columns_parent_id_idx" ON "_courses_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_content_order_idx" ON "_courses_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_content_parent_id_idx" ON "_courses_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_content_path_idx" ON "_courses_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_courses_v_blocks_media_block_order_idx" ON "_courses_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_media_block_parent_id_idx" ON "_courses_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_media_block_path_idx" ON "_courses_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX "_courses_v_blocks_media_block_media_idx" ON "_courses_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "_courses_v_blocks_archive_order_idx" ON "_courses_v_blocks_archive" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_archive_parent_id_idx" ON "_courses_v_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_archive_path_idx" ON "_courses_v_blocks_archive" USING btree ("_path");
  CREATE INDEX "_courses_v_blocks_form_block_order_idx" ON "_courses_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_form_block_parent_id_idx" ON "_courses_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_form_block_path_idx" ON "_courses_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX "_courses_v_blocks_form_block_form_idx" ON "_courses_v_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "_courses_v_blocks_faq_faqs_order_idx" ON "_courses_v_blocks_faq_faqs" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_faq_faqs_parent_id_idx" ON "_courses_v_blocks_faq_faqs" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_faq_order_idx" ON "_courses_v_blocks_faq" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_faq_parent_id_idx" ON "_courses_v_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_faq_path_idx" ON "_courses_v_blocks_faq" USING btree ("_path");
  CREATE INDEX "_courses_v_blocks_team_members_social_links_order_idx" ON "_courses_v_blocks_team_members_social_links" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_team_members_social_links_parent_id_idx" ON "_courses_v_blocks_team_members_social_links" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_team_members_order_idx" ON "_courses_v_blocks_team_members" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_team_members_parent_id_idx" ON "_courses_v_blocks_team_members" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_team_members_avatar_idx" ON "_courses_v_blocks_team_members" USING btree ("avatar_id");
  CREATE INDEX "_courses_v_blocks_team_order_idx" ON "_courses_v_blocks_team" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_team_parent_id_idx" ON "_courses_v_blocks_team" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_team_path_idx" ON "_courses_v_blocks_team" USING btree ("_path");
  CREATE INDEX "_courses_v_blocks_testimonials_testimonials_order_idx" ON "_courses_v_blocks_testimonials_testimonials" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_testimonials_testimonials_parent_id_idx" ON "_courses_v_blocks_testimonials_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_testimonials_testimonials_author_autho_idx" ON "_courses_v_blocks_testimonials_testimonials" USING btree ("author_avatar_id");
  CREATE INDEX "_courses_v_blocks_testimonials_testimonials_company_logo_idx" ON "_courses_v_blocks_testimonials_testimonials" USING btree ("company_logo_id");
  CREATE INDEX "_courses_v_blocks_testimonials_order_idx" ON "_courses_v_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_testimonials_parent_id_idx" ON "_courses_v_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_testimonials_path_idx" ON "_courses_v_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "_courses_v_blocks_pricing_table_plans_features_order_idx" ON "_courses_v_blocks_pricing_table_plans_features" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_pricing_table_plans_features_parent_id_idx" ON "_courses_v_blocks_pricing_table_plans_features" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_pricing_table_plans_order_idx" ON "_courses_v_blocks_pricing_table_plans" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_pricing_table_plans_parent_id_idx" ON "_courses_v_blocks_pricing_table_plans" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_pricing_table_order_idx" ON "_courses_v_blocks_pricing_table" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_pricing_table_parent_id_idx" ON "_courses_v_blocks_pricing_table" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_pricing_table_path_idx" ON "_courses_v_blocks_pricing_table" USING btree ("_path");
  CREATE INDEX "_courses_v_blocks_two_column_layout_buttons_order_idx" ON "_courses_v_blocks_two_column_layout_buttons" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_two_column_layout_buttons_parent_id_idx" ON "_courses_v_blocks_two_column_layout_buttons" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_two_column_layout_order_idx" ON "_courses_v_blocks_two_column_layout" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_two_column_layout_parent_id_idx" ON "_courses_v_blocks_two_column_layout" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_two_column_layout_path_idx" ON "_courses_v_blocks_two_column_layout" USING btree ("_path");
  CREATE INDEX "_courses_v_blocks_two_column_layout_image_idx" ON "_courses_v_blocks_two_column_layout" USING btree ("image_id");
  CREATE INDEX "_courses_v_blocks_feature_grid_features_order_idx" ON "_courses_v_blocks_feature_grid_features" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_feature_grid_features_parent_id_idx" ON "_courses_v_blocks_feature_grid_features" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_feature_grid_features_icon_idx" ON "_courses_v_blocks_feature_grid_features" USING btree ("icon_id");
  CREATE INDEX "_courses_v_blocks_feature_grid_features_image_idx" ON "_courses_v_blocks_feature_grid_features" USING btree ("image_id");
  CREATE INDEX "_courses_v_blocks_feature_grid_bottom_buttons_order_idx" ON "_courses_v_blocks_feature_grid_bottom_buttons" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_feature_grid_bottom_buttons_parent_id_idx" ON "_courses_v_blocks_feature_grid_bottom_buttons" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_feature_grid_order_idx" ON "_courses_v_blocks_feature_grid" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_feature_grid_parent_id_idx" ON "_courses_v_blocks_feature_grid" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_feature_grid_path_idx" ON "_courses_v_blocks_feature_grid" USING btree ("_path");
  CREATE INDEX "_courses_v_blocks_header_buttons_order_idx" ON "_courses_v_blocks_header_buttons" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_header_buttons_parent_id_idx" ON "_courses_v_blocks_header_buttons" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_header_order_idx" ON "_courses_v_blocks_header" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_header_parent_id_idx" ON "_courses_v_blocks_header" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_header_path_idx" ON "_courses_v_blocks_header" USING btree ("_path");
  CREATE INDEX "_courses_v_blocks_header_image_idx" ON "_courses_v_blocks_header" USING btree ("image_id");
  CREATE INDEX "_courses_v_blocks_gallery_images_order_idx" ON "_courses_v_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_gallery_images_parent_id_idx" ON "_courses_v_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_gallery_images_image_idx" ON "_courses_v_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "_courses_v_blocks_gallery_order_idx" ON "_courses_v_blocks_gallery" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_gallery_parent_id_idx" ON "_courses_v_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_gallery_path_idx" ON "_courses_v_blocks_gallery" USING btree ("_path");
  CREATE INDEX "_courses_v_blocks_contact_info_methods_order_idx" ON "_courses_v_blocks_contact_info_methods" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_contact_info_methods_parent_id_idx" ON "_courses_v_blocks_contact_info_methods" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_contact_info_order_idx" ON "_courses_v_blocks_contact_info" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_contact_info_parent_id_idx" ON "_courses_v_blocks_contact_info" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_contact_info_path_idx" ON "_courses_v_blocks_contact_info" USING btree ("_path");
  CREATE INDEX "_courses_v_blocks_blog_grid_categories_order_idx" ON "_courses_v_blocks_blog_grid_categories" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_blog_grid_categories_parent_id_idx" ON "_courses_v_blocks_blog_grid_categories" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_blog_grid_posts_order_idx" ON "_courses_v_blocks_blog_grid_posts" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_blog_grid_posts_parent_id_idx" ON "_courses_v_blocks_blog_grid_posts" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_blog_grid_posts_image_idx" ON "_courses_v_blocks_blog_grid_posts" USING btree ("image_id");
  CREATE INDEX "_courses_v_blocks_blog_grid_order_idx" ON "_courses_v_blocks_blog_grid" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_blog_grid_parent_id_idx" ON "_courses_v_blocks_blog_grid" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_blog_grid_path_idx" ON "_courses_v_blocks_blog_grid" USING btree ("_path");
  CREATE INDEX "_courses_v_blocks_dynamic_blog_grid_order_idx" ON "_courses_v_blocks_dynamic_blog_grid" USING btree ("_order");
  CREATE INDEX "_courses_v_blocks_dynamic_blog_grid_parent_id_idx" ON "_courses_v_blocks_dynamic_blog_grid" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_blocks_dynamic_blog_grid_path_idx" ON "_courses_v_blocks_dynamic_blog_grid" USING btree ("_path");
  CREATE INDEX "_courses_v_blocks_dynamic_blog_grid_category_filter_idx" ON "_courses_v_blocks_dynamic_blog_grid" USING btree ("category_filter_id");
  CREATE INDEX "_courses_v_version_populated_authors_order_idx" ON "_courses_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX "_courses_v_version_populated_authors_parent_id_idx" ON "_courses_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "_courses_v_parent_idx" ON "_courses_v" USING btree ("parent_id");
  CREATE INDEX "_courses_v_version_version_hero_image_idx" ON "_courses_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_courses_v_version_meta_version_meta_image_idx" ON "_courses_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_courses_v_version_version_slug_idx" ON "_courses_v" USING btree ("version_slug");
  CREATE INDEX "_courses_v_version_version_updated_at_idx" ON "_courses_v" USING btree ("version_updated_at");
  CREATE INDEX "_courses_v_version_version_created_at_idx" ON "_courses_v" USING btree ("version_created_at");
  CREATE INDEX "_courses_v_version_version__status_idx" ON "_courses_v" USING btree ("version__status");
  CREATE INDEX "_courses_v_created_at_idx" ON "_courses_v" USING btree ("created_at");
  CREATE INDEX "_courses_v_updated_at_idx" ON "_courses_v" USING btree ("updated_at");
  CREATE INDEX "_courses_v_latest_idx" ON "_courses_v" USING btree ("latest");
  CREATE INDEX "_courses_v_autosave_idx" ON "_courses_v" USING btree ("autosave");
  CREATE INDEX "_courses_v_rels_order_idx" ON "_courses_v_rels" USING btree ("order");
  CREATE INDEX "_courses_v_rels_parent_idx" ON "_courses_v_rels" USING btree ("parent_id");
  CREATE INDEX "_courses_v_rels_path_idx" ON "_courses_v_rels" USING btree ("path");
  CREATE INDEX "_courses_v_rels_pages_id_idx" ON "_courses_v_rels" USING btree ("pages_id");
  CREATE INDEX "_courses_v_rels_blogs_id_idx" ON "_courses_v_rels" USING btree ("blogs_id");
  CREATE INDEX "_courses_v_rels_courses_id_idx" ON "_courses_v_rels" USING btree ("courses_id");
  CREATE INDEX "_courses_v_rels_categories_id_idx" ON "_courses_v_rels" USING btree ("categories_id");
  CREATE INDEX "_courses_v_rels_users_id_idx" ON "_courses_v_rels" USING btree ("users_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_square_sizes_square_filename_idx" ON "media" USING btree ("sizes_square_filename");
  CREATE INDEX "media_sizes_small_sizes_small_filename_idx" ON "media" USING btree ("sizes_small_filename");
  CREATE INDEX "media_sizes_medium_sizes_medium_filename_idx" ON "media" USING btree ("sizes_medium_filename");
  CREATE INDEX "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE INDEX "media_sizes_xlarge_sizes_xlarge_filename_idx" ON "media" USING btree ("sizes_xlarge_filename");
  CREATE INDEX "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX "categories_breadcrumbs_order_idx" ON "categories_breadcrumbs" USING btree ("_order");
  CREATE INDEX "categories_breadcrumbs_parent_id_idx" ON "categories_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "categories_breadcrumbs_doc_idx" ON "categories_breadcrumbs" USING btree ("doc_id");
  CREATE UNIQUE INDEX "categories_slug_idx" ON "categories" USING btree ("slug");
  CREATE INDEX "categories_parent_idx" ON "categories" USING btree ("parent_id");
  CREATE INDEX "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX "categories_created_at_idx" ON "categories" USING btree ("created_at");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE INDEX "redirects_rels_blogs_id_idx" ON "redirects_rels" USING btree ("blogs_id");
  CREATE INDEX "redirects_rels_courses_id_idx" ON "redirects_rels" USING btree ("courses_id");
  CREATE INDEX "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" USING btree ("_order");
  CREATE INDEX "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" USING btree ("_path");
  CREATE INDEX "forms_blocks_country_order_idx" ON "forms_blocks_country" USING btree ("_order");
  CREATE INDEX "forms_blocks_country_parent_id_idx" ON "forms_blocks_country" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_country_path_idx" ON "forms_blocks_country" USING btree ("_path");
  CREATE INDEX "forms_blocks_email_order_idx" ON "forms_blocks_email" USING btree ("_order");
  CREATE INDEX "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_email_path_idx" ON "forms_blocks_email" USING btree ("_path");
  CREATE INDEX "forms_blocks_message_order_idx" ON "forms_blocks_message" USING btree ("_order");
  CREATE INDEX "forms_blocks_message_parent_id_idx" ON "forms_blocks_message" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_message_path_idx" ON "forms_blocks_message" USING btree ("_path");
  CREATE INDEX "forms_blocks_number_order_idx" ON "forms_blocks_number" USING btree ("_order");
  CREATE INDEX "forms_blocks_number_parent_id_idx" ON "forms_blocks_number" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_number_path_idx" ON "forms_blocks_number" USING btree ("_path");
  CREATE INDEX "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE INDEX "forms_blocks_state_order_idx" ON "forms_blocks_state" USING btree ("_order");
  CREATE INDEX "forms_blocks_state_parent_id_idx" ON "forms_blocks_state" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_state_path_idx" ON "forms_blocks_state" USING btree ("_path");
  CREATE INDEX "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE INDEX "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE INDEX "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE INDEX "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE INDEX "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX "search_categories_order_idx" ON "search_categories" USING btree ("_order");
  CREATE INDEX "search_categories_parent_id_idx" ON "search_categories" USING btree ("_parent_id");
  CREATE INDEX "search_slug_idx" ON "search" USING btree ("slug");
  CREATE INDEX "search_meta_meta_image_idx" ON "search" USING btree ("meta_image_id");
  CREATE INDEX "search_updated_at_idx" ON "search" USING btree ("updated_at");
  CREATE INDEX "search_created_at_idx" ON "search" USING btree ("created_at");
  CREATE INDEX "search_rels_order_idx" ON "search_rels" USING btree ("order");
  CREATE INDEX "search_rels_parent_idx" ON "search_rels" USING btree ("parent_id");
  CREATE INDEX "search_rels_path_idx" ON "search_rels" USING btree ("path");
  CREATE INDEX "search_rels_blogs_id_idx" ON "search_rels" USING btree ("blogs_id");
  CREATE INDEX "search_rels_courses_id_idx" ON "search_rels" USING btree ("courses_id");
  CREATE INDEX "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_blogs_id_idx" ON "payload_locked_documents_rels" USING btree ("blogs_id");
  CREATE INDEX "payload_locked_documents_rels_courses_id_idx" ON "payload_locked_documents_rels" USING btree ("courses_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_search_id_idx" ON "payload_locked_documents_rels" USING btree ("search_id");
  CREATE INDEX "payload_locked_documents_rels_payload_jobs_id_idx" ON "payload_locked_documents_rels" USING btree ("payload_jobs_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "header_nav_items_order_idx" ON "header_nav_items" USING btree ("_order");
  CREATE INDEX "header_nav_items_parent_id_idx" ON "header_nav_items" USING btree ("_parent_id");
  CREATE INDEX "header_action_buttons_order_idx" ON "header_action_buttons" USING btree ("_order");
  CREATE INDEX "header_action_buttons_parent_id_idx" ON "header_action_buttons" USING btree ("_parent_id");
  CREATE INDEX "header_logo_idx" ON "header" USING btree ("logo_id");
  CREATE INDEX "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX "header_rels_blogs_id_idx" ON "header_rels" USING btree ("blogs_id");
  CREATE INDEX "header_rels_courses_id_idx" ON "header_rels" USING btree ("courses_id");
  CREATE INDEX "footer_link_sections_links_order_idx" ON "footer_link_sections_links" USING btree ("_order");
  CREATE INDEX "footer_link_sections_links_parent_id_idx" ON "footer_link_sections_links" USING btree ("_parent_id");
  CREATE INDEX "footer_link_sections_order_idx" ON "footer_link_sections" USING btree ("_order");
  CREATE INDEX "footer_link_sections_parent_id_idx" ON "footer_link_sections" USING btree ("_parent_id");
  CREATE INDEX "footer_social_links_order_idx" ON "footer_social_links" USING btree ("_order");
  CREATE INDEX "footer_social_links_parent_id_idx" ON "footer_social_links" USING btree ("_parent_id");
  CREATE INDEX "footer_legal_links_order_idx" ON "footer_legal_links" USING btree ("_order");
  CREATE INDEX "footer_legal_links_parent_id_idx" ON "footer_legal_links" USING btree ("_parent_id");
  CREATE INDEX "footer_logo_idx" ON "footer" USING btree ("logo_id");
  CREATE INDEX "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  CREATE INDEX "footer_rels_blogs_id_idx" ON "footer_rels" USING btree ("blogs_id");
  CREATE INDEX "footer_rels_courses_id_idx" ON "footer_rels" USING btree ("courses_id");
  CREATE INDEX "global_cta_buttons_order_idx" ON "global_cta_buttons" USING btree ("_order");
  CREATE INDEX "global_cta_buttons_parent_id_idx" ON "global_cta_buttons" USING btree ("_parent_id");
  CREATE INDEX "global_cta_form_idx" ON "global_cta" USING btree ("form_id");
  CREATE INDEX "global_cta_image_idx" ON "global_cta" USING btree ("image_id");
  CREATE INDEX "blog_overview_blocks_cta_buttons_order_idx" ON "blog_overview_blocks_cta_buttons" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_cta_buttons_parent_id_idx" ON "blog_overview_blocks_cta_buttons" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_cta_order_idx" ON "blog_overview_blocks_cta" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_cta_parent_id_idx" ON "blog_overview_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_cta_path_idx" ON "blog_overview_blocks_cta" USING btree ("_path");
  CREATE INDEX "blog_overview_blocks_cta_form_idx" ON "blog_overview_blocks_cta" USING btree ("form_id");
  CREATE INDEX "blog_overview_blocks_cta_image_idx" ON "blog_overview_blocks_cta" USING btree ("image_id");
  CREATE INDEX "blog_overview_blocks_content_columns_order_idx" ON "blog_overview_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_content_columns_parent_id_idx" ON "blog_overview_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_content_order_idx" ON "blog_overview_blocks_content" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_content_parent_id_idx" ON "blog_overview_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_content_path_idx" ON "blog_overview_blocks_content" USING btree ("_path");
  CREATE INDEX "blog_overview_blocks_media_block_order_idx" ON "blog_overview_blocks_media_block" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_media_block_parent_id_idx" ON "blog_overview_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_media_block_path_idx" ON "blog_overview_blocks_media_block" USING btree ("_path");
  CREATE INDEX "blog_overview_blocks_media_block_media_idx" ON "blog_overview_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "blog_overview_blocks_archive_order_idx" ON "blog_overview_blocks_archive" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_archive_parent_id_idx" ON "blog_overview_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_archive_path_idx" ON "blog_overview_blocks_archive" USING btree ("_path");
  CREATE INDEX "blog_overview_blocks_form_block_order_idx" ON "blog_overview_blocks_form_block" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_form_block_parent_id_idx" ON "blog_overview_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_form_block_path_idx" ON "blog_overview_blocks_form_block" USING btree ("_path");
  CREATE INDEX "blog_overview_blocks_form_block_form_idx" ON "blog_overview_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "blog_overview_blocks_faq_faqs_order_idx" ON "blog_overview_blocks_faq_faqs" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_faq_faqs_parent_id_idx" ON "blog_overview_blocks_faq_faqs" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_faq_order_idx" ON "blog_overview_blocks_faq" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_faq_parent_id_idx" ON "blog_overview_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_faq_path_idx" ON "blog_overview_blocks_faq" USING btree ("_path");
  CREATE INDEX "blog_overview_blocks_team_members_social_links_order_idx" ON "blog_overview_blocks_team_members_social_links" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_team_members_social_links_parent_id_idx" ON "blog_overview_blocks_team_members_social_links" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_team_members_order_idx" ON "blog_overview_blocks_team_members" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_team_members_parent_id_idx" ON "blog_overview_blocks_team_members" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_team_members_avatar_idx" ON "blog_overview_blocks_team_members" USING btree ("avatar_id");
  CREATE INDEX "blog_overview_blocks_team_order_idx" ON "blog_overview_blocks_team" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_team_parent_id_idx" ON "blog_overview_blocks_team" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_team_path_idx" ON "blog_overview_blocks_team" USING btree ("_path");
  CREATE INDEX "blog_overview_blocks_testimonials_testimonials_order_idx" ON "blog_overview_blocks_testimonials_testimonials" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_testimonials_testimonials_parent_id_idx" ON "blog_overview_blocks_testimonials_testimonials" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_testimonials_testimonials_author_au_idx" ON "blog_overview_blocks_testimonials_testimonials" USING btree ("author_avatar_id");
  CREATE INDEX "blog_overview_blocks_testimonials_testimonials_company_l_idx" ON "blog_overview_blocks_testimonials_testimonials" USING btree ("company_logo_id");
  CREATE INDEX "blog_overview_blocks_testimonials_order_idx" ON "blog_overview_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_testimonials_parent_id_idx" ON "blog_overview_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_testimonials_path_idx" ON "blog_overview_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "blog_overview_blocks_pricing_table_plans_features_order_idx" ON "blog_overview_blocks_pricing_table_plans_features" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_pricing_table_plans_features_parent_id_idx" ON "blog_overview_blocks_pricing_table_plans_features" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_pricing_table_plans_order_idx" ON "blog_overview_blocks_pricing_table_plans" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_pricing_table_plans_parent_id_idx" ON "blog_overview_blocks_pricing_table_plans" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_pricing_table_order_idx" ON "blog_overview_blocks_pricing_table" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_pricing_table_parent_id_idx" ON "blog_overview_blocks_pricing_table" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_pricing_table_path_idx" ON "blog_overview_blocks_pricing_table" USING btree ("_path");
  CREATE INDEX "blog_overview_blocks_two_column_layout_buttons_order_idx" ON "blog_overview_blocks_two_column_layout_buttons" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_two_column_layout_buttons_parent_id_idx" ON "blog_overview_blocks_two_column_layout_buttons" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_two_column_layout_order_idx" ON "blog_overview_blocks_two_column_layout" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_two_column_layout_parent_id_idx" ON "blog_overview_blocks_two_column_layout" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_two_column_layout_path_idx" ON "blog_overview_blocks_two_column_layout" USING btree ("_path");
  CREATE INDEX "blog_overview_blocks_two_column_layout_image_idx" ON "blog_overview_blocks_two_column_layout" USING btree ("image_id");
  CREATE INDEX "blog_overview_blocks_feature_grid_features_order_idx" ON "blog_overview_blocks_feature_grid_features" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_feature_grid_features_parent_id_idx" ON "blog_overview_blocks_feature_grid_features" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_feature_grid_features_icon_idx" ON "blog_overview_blocks_feature_grid_features" USING btree ("icon_id");
  CREATE INDEX "blog_overview_blocks_feature_grid_features_image_idx" ON "blog_overview_blocks_feature_grid_features" USING btree ("image_id");
  CREATE INDEX "blog_overview_blocks_feature_grid_bottom_buttons_order_idx" ON "blog_overview_blocks_feature_grid_bottom_buttons" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_feature_grid_bottom_buttons_parent_id_idx" ON "blog_overview_blocks_feature_grid_bottom_buttons" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_feature_grid_order_idx" ON "blog_overview_blocks_feature_grid" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_feature_grid_parent_id_idx" ON "blog_overview_blocks_feature_grid" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_feature_grid_path_idx" ON "blog_overview_blocks_feature_grid" USING btree ("_path");
  CREATE INDEX "blog_overview_blocks_header_buttons_order_idx" ON "blog_overview_blocks_header_buttons" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_header_buttons_parent_id_idx" ON "blog_overview_blocks_header_buttons" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_header_order_idx" ON "blog_overview_blocks_header" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_header_parent_id_idx" ON "blog_overview_blocks_header" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_header_path_idx" ON "blog_overview_blocks_header" USING btree ("_path");
  CREATE INDEX "blog_overview_blocks_header_image_idx" ON "blog_overview_blocks_header" USING btree ("image_id");
  CREATE INDEX "blog_overview_blocks_gallery_images_order_idx" ON "blog_overview_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_gallery_images_parent_id_idx" ON "blog_overview_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_gallery_images_image_idx" ON "blog_overview_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "blog_overview_blocks_gallery_order_idx" ON "blog_overview_blocks_gallery" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_gallery_parent_id_idx" ON "blog_overview_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_gallery_path_idx" ON "blog_overview_blocks_gallery" USING btree ("_path");
  CREATE INDEX "blog_overview_blocks_contact_info_methods_order_idx" ON "blog_overview_blocks_contact_info_methods" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_contact_info_methods_parent_id_idx" ON "blog_overview_blocks_contact_info_methods" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_contact_info_order_idx" ON "blog_overview_blocks_contact_info" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_contact_info_parent_id_idx" ON "blog_overview_blocks_contact_info" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_contact_info_path_idx" ON "blog_overview_blocks_contact_info" USING btree ("_path");
  CREATE INDEX "blog_overview_blocks_blog_grid_categories_order_idx" ON "blog_overview_blocks_blog_grid_categories" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_blog_grid_categories_parent_id_idx" ON "blog_overview_blocks_blog_grid_categories" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_blog_grid_posts_order_idx" ON "blog_overview_blocks_blog_grid_posts" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_blog_grid_posts_parent_id_idx" ON "blog_overview_blocks_blog_grid_posts" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_blog_grid_posts_image_idx" ON "blog_overview_blocks_blog_grid_posts" USING btree ("image_id");
  CREATE INDEX "blog_overview_blocks_blog_grid_order_idx" ON "blog_overview_blocks_blog_grid" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_blog_grid_parent_id_idx" ON "blog_overview_blocks_blog_grid" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_blog_grid_path_idx" ON "blog_overview_blocks_blog_grid" USING btree ("_path");
  CREATE INDEX "blog_overview_blocks_dynamic_blog_grid_order_idx" ON "blog_overview_blocks_dynamic_blog_grid" USING btree ("_order");
  CREATE INDEX "blog_overview_blocks_dynamic_blog_grid_parent_id_idx" ON "blog_overview_blocks_dynamic_blog_grid" USING btree ("_parent_id");
  CREATE INDEX "blog_overview_blocks_dynamic_blog_grid_path_idx" ON "blog_overview_blocks_dynamic_blog_grid" USING btree ("_path");
  CREATE INDEX "blog_overview_blocks_dynamic_blog_grid_category_filter_idx" ON "blog_overview_blocks_dynamic_blog_grid" USING btree ("category_filter_id");
  CREATE INDEX "blog_overview_meta_meta_image_idx" ON "blog_overview" USING btree ("meta_image_id");
  CREATE INDEX "blog_overview_rels_order_idx" ON "blog_overview_rels" USING btree ("order");
  CREATE INDEX "blog_overview_rels_parent_idx" ON "blog_overview_rels" USING btree ("parent_id");
  CREATE INDEX "blog_overview_rels_path_idx" ON "blog_overview_rels" USING btree ("path");
  CREATE INDEX "blog_overview_rels_pages_id_idx" ON "blog_overview_rels" USING btree ("pages_id");
  CREATE INDEX "blog_overview_rels_blogs_id_idx" ON "blog_overview_rels" USING btree ("blogs_id");
  CREATE INDEX "blog_overview_rels_courses_id_idx" ON "blog_overview_rels" USING btree ("courses_id");
  CREATE INDEX "blog_overview_rels_categories_id_idx" ON "blog_overview_rels" USING btree ("categories_id");
  CREATE INDEX "course_overview_blocks_cta_buttons_order_idx" ON "course_overview_blocks_cta_buttons" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_cta_buttons_parent_id_idx" ON "course_overview_blocks_cta_buttons" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_cta_order_idx" ON "course_overview_blocks_cta" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_cta_parent_id_idx" ON "course_overview_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_cta_path_idx" ON "course_overview_blocks_cta" USING btree ("_path");
  CREATE INDEX "course_overview_blocks_cta_form_idx" ON "course_overview_blocks_cta" USING btree ("form_id");
  CREATE INDEX "course_overview_blocks_cta_image_idx" ON "course_overview_blocks_cta" USING btree ("image_id");
  CREATE INDEX "course_overview_blocks_content_columns_order_idx" ON "course_overview_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_content_columns_parent_id_idx" ON "course_overview_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_content_order_idx" ON "course_overview_blocks_content" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_content_parent_id_idx" ON "course_overview_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_content_path_idx" ON "course_overview_blocks_content" USING btree ("_path");
  CREATE INDEX "course_overview_blocks_media_block_order_idx" ON "course_overview_blocks_media_block" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_media_block_parent_id_idx" ON "course_overview_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_media_block_path_idx" ON "course_overview_blocks_media_block" USING btree ("_path");
  CREATE INDEX "course_overview_blocks_media_block_media_idx" ON "course_overview_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "course_overview_blocks_archive_order_idx" ON "course_overview_blocks_archive" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_archive_parent_id_idx" ON "course_overview_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_archive_path_idx" ON "course_overview_blocks_archive" USING btree ("_path");
  CREATE INDEX "course_overview_blocks_form_block_order_idx" ON "course_overview_blocks_form_block" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_form_block_parent_id_idx" ON "course_overview_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_form_block_path_idx" ON "course_overview_blocks_form_block" USING btree ("_path");
  CREATE INDEX "course_overview_blocks_form_block_form_idx" ON "course_overview_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "course_overview_blocks_faq_faqs_order_idx" ON "course_overview_blocks_faq_faqs" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_faq_faqs_parent_id_idx" ON "course_overview_blocks_faq_faqs" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_faq_order_idx" ON "course_overview_blocks_faq" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_faq_parent_id_idx" ON "course_overview_blocks_faq" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_faq_path_idx" ON "course_overview_blocks_faq" USING btree ("_path");
  CREATE INDEX "course_overview_blocks_team_members_social_links_order_idx" ON "course_overview_blocks_team_members_social_links" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_team_members_social_links_parent_id_idx" ON "course_overview_blocks_team_members_social_links" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_team_members_order_idx" ON "course_overview_blocks_team_members" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_team_members_parent_id_idx" ON "course_overview_blocks_team_members" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_team_members_avatar_idx" ON "course_overview_blocks_team_members" USING btree ("avatar_id");
  CREATE INDEX "course_overview_blocks_team_order_idx" ON "course_overview_blocks_team" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_team_parent_id_idx" ON "course_overview_blocks_team" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_team_path_idx" ON "course_overview_blocks_team" USING btree ("_path");
  CREATE INDEX "course_overview_blocks_testimonials_testimonials_order_idx" ON "course_overview_blocks_testimonials_testimonials" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_testimonials_testimonials_parent_id_idx" ON "course_overview_blocks_testimonials_testimonials" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_testimonials_testimonials_author__idx" ON "course_overview_blocks_testimonials_testimonials" USING btree ("author_avatar_id");
  CREATE INDEX "course_overview_blocks_testimonials_testimonials_company_idx" ON "course_overview_blocks_testimonials_testimonials" USING btree ("company_logo_id");
  CREATE INDEX "course_overview_blocks_testimonials_order_idx" ON "course_overview_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_testimonials_parent_id_idx" ON "course_overview_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_testimonials_path_idx" ON "course_overview_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "course_overview_blocks_pricing_table_plans_features_order_idx" ON "course_overview_blocks_pricing_table_plans_features" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_pricing_table_plans_features_parent_id_idx" ON "course_overview_blocks_pricing_table_plans_features" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_pricing_table_plans_order_idx" ON "course_overview_blocks_pricing_table_plans" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_pricing_table_plans_parent_id_idx" ON "course_overview_blocks_pricing_table_plans" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_pricing_table_order_idx" ON "course_overview_blocks_pricing_table" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_pricing_table_parent_id_idx" ON "course_overview_blocks_pricing_table" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_pricing_table_path_idx" ON "course_overview_blocks_pricing_table" USING btree ("_path");
  CREATE INDEX "course_overview_blocks_two_column_layout_buttons_order_idx" ON "course_overview_blocks_two_column_layout_buttons" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_two_column_layout_buttons_parent_id_idx" ON "course_overview_blocks_two_column_layout_buttons" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_two_column_layout_order_idx" ON "course_overview_blocks_two_column_layout" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_two_column_layout_parent_id_idx" ON "course_overview_blocks_two_column_layout" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_two_column_layout_path_idx" ON "course_overview_blocks_two_column_layout" USING btree ("_path");
  CREATE INDEX "course_overview_blocks_two_column_layout_image_idx" ON "course_overview_blocks_two_column_layout" USING btree ("image_id");
  CREATE INDEX "course_overview_blocks_feature_grid_features_order_idx" ON "course_overview_blocks_feature_grid_features" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_feature_grid_features_parent_id_idx" ON "course_overview_blocks_feature_grid_features" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_feature_grid_features_icon_idx" ON "course_overview_blocks_feature_grid_features" USING btree ("icon_id");
  CREATE INDEX "course_overview_blocks_feature_grid_features_image_idx" ON "course_overview_blocks_feature_grid_features" USING btree ("image_id");
  CREATE INDEX "course_overview_blocks_feature_grid_bottom_buttons_order_idx" ON "course_overview_blocks_feature_grid_bottom_buttons" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_feature_grid_bottom_buttons_parent_id_idx" ON "course_overview_blocks_feature_grid_bottom_buttons" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_feature_grid_order_idx" ON "course_overview_blocks_feature_grid" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_feature_grid_parent_id_idx" ON "course_overview_blocks_feature_grid" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_feature_grid_path_idx" ON "course_overview_blocks_feature_grid" USING btree ("_path");
  CREATE INDEX "course_overview_blocks_header_buttons_order_idx" ON "course_overview_blocks_header_buttons" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_header_buttons_parent_id_idx" ON "course_overview_blocks_header_buttons" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_header_order_idx" ON "course_overview_blocks_header" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_header_parent_id_idx" ON "course_overview_blocks_header" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_header_path_idx" ON "course_overview_blocks_header" USING btree ("_path");
  CREATE INDEX "course_overview_blocks_header_image_idx" ON "course_overview_blocks_header" USING btree ("image_id");
  CREATE INDEX "course_overview_blocks_gallery_images_order_idx" ON "course_overview_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_gallery_images_parent_id_idx" ON "course_overview_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_gallery_images_image_idx" ON "course_overview_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX "course_overview_blocks_gallery_order_idx" ON "course_overview_blocks_gallery" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_gallery_parent_id_idx" ON "course_overview_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_gallery_path_idx" ON "course_overview_blocks_gallery" USING btree ("_path");
  CREATE INDEX "course_overview_blocks_contact_info_methods_order_idx" ON "course_overview_blocks_contact_info_methods" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_contact_info_methods_parent_id_idx" ON "course_overview_blocks_contact_info_methods" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_contact_info_order_idx" ON "course_overview_blocks_contact_info" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_contact_info_parent_id_idx" ON "course_overview_blocks_contact_info" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_contact_info_path_idx" ON "course_overview_blocks_contact_info" USING btree ("_path");
  CREATE INDEX "course_overview_blocks_blog_grid_categories_order_idx" ON "course_overview_blocks_blog_grid_categories" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_blog_grid_categories_parent_id_idx" ON "course_overview_blocks_blog_grid_categories" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_blog_grid_posts_order_idx" ON "course_overview_blocks_blog_grid_posts" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_blog_grid_posts_parent_id_idx" ON "course_overview_blocks_blog_grid_posts" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_blog_grid_posts_image_idx" ON "course_overview_blocks_blog_grid_posts" USING btree ("image_id");
  CREATE INDEX "course_overview_blocks_blog_grid_order_idx" ON "course_overview_blocks_blog_grid" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_blog_grid_parent_id_idx" ON "course_overview_blocks_blog_grid" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_blog_grid_path_idx" ON "course_overview_blocks_blog_grid" USING btree ("_path");
  CREATE INDEX "course_overview_blocks_dynamic_blog_grid_order_idx" ON "course_overview_blocks_dynamic_blog_grid" USING btree ("_order");
  CREATE INDEX "course_overview_blocks_dynamic_blog_grid_parent_id_idx" ON "course_overview_blocks_dynamic_blog_grid" USING btree ("_parent_id");
  CREATE INDEX "course_overview_blocks_dynamic_blog_grid_path_idx" ON "course_overview_blocks_dynamic_blog_grid" USING btree ("_path");
  CREATE INDEX "course_overview_blocks_dynamic_blog_grid_category_filter_idx" ON "course_overview_blocks_dynamic_blog_grid" USING btree ("category_filter_id");
  CREATE INDEX "course_overview_meta_meta_image_idx" ON "course_overview" USING btree ("meta_image_id");
  CREATE INDEX "course_overview_rels_order_idx" ON "course_overview_rels" USING btree ("order");
  CREATE INDEX "course_overview_rels_parent_idx" ON "course_overview_rels" USING btree ("parent_id");
  CREATE INDEX "course_overview_rels_path_idx" ON "course_overview_rels" USING btree ("path");
  CREATE INDEX "course_overview_rels_pages_id_idx" ON "course_overview_rels" USING btree ("pages_id");
  CREATE INDEX "course_overview_rels_blogs_id_idx" ON "course_overview_rels" USING btree ("blogs_id");
  CREATE INDEX "course_overview_rels_courses_id_idx" ON "course_overview_rels" USING btree ("courses_id");
  CREATE INDEX "course_overview_rels_categories_id_idx" ON "course_overview_rels" USING btree ("categories_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_cta_buttons" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages_blocks_content_columns" CASCADE;
  DROP TABLE "pages_blocks_content" CASCADE;
  DROP TABLE "pages_blocks_media_block" CASCADE;
  DROP TABLE "pages_blocks_archive" CASCADE;
  DROP TABLE "pages_blocks_form_block" CASCADE;
  DROP TABLE "pages_blocks_faq_faqs" CASCADE;
  DROP TABLE "pages_blocks_faq" CASCADE;
  DROP TABLE "pages_blocks_team_members_social_links" CASCADE;
  DROP TABLE "pages_blocks_team_members" CASCADE;
  DROP TABLE "pages_blocks_team" CASCADE;
  DROP TABLE "pages_blocks_testimonials_testimonials" CASCADE;
  DROP TABLE "pages_blocks_testimonials" CASCADE;
  DROP TABLE "pages_blocks_pricing_table_plans_features" CASCADE;
  DROP TABLE "pages_blocks_pricing_table_plans" CASCADE;
  DROP TABLE "pages_blocks_pricing_table" CASCADE;
  DROP TABLE "pages_blocks_two_column_layout_buttons" CASCADE;
  DROP TABLE "pages_blocks_two_column_layout" CASCADE;
  DROP TABLE "pages_blocks_feature_grid_features" CASCADE;
  DROP TABLE "pages_blocks_feature_grid_bottom_buttons" CASCADE;
  DROP TABLE "pages_blocks_feature_grid" CASCADE;
  DROP TABLE "pages_blocks_header_buttons" CASCADE;
  DROP TABLE "pages_blocks_header" CASCADE;
  DROP TABLE "pages_blocks_gallery_images" CASCADE;
  DROP TABLE "pages_blocks_gallery" CASCADE;
  DROP TABLE "pages_blocks_contact_info_methods" CASCADE;
  DROP TABLE "pages_blocks_contact_info" CASCADE;
  DROP TABLE "pages_blocks_blog_grid_categories" CASCADE;
  DROP TABLE "pages_blocks_blog_grid_posts" CASCADE;
  DROP TABLE "pages_blocks_blog_grid" CASCADE;
  DROP TABLE "pages_blocks_dynamic_blog_grid" CASCADE;
  DROP TABLE "pages_blocks_logo_list_logos" CASCADE;
  DROP TABLE "pages_blocks_logo_list" CASCADE;
  DROP TABLE "pages_blocks_layout90_block" CASCADE;
  DROP TABLE "pages_blocks_layout10_block_sub_headings" CASCADE;
  DROP TABLE "pages_blocks_layout10_block_buttons" CASCADE;
  DROP TABLE "pages_blocks_layout10_block" CASCADE;
  DROP TABLE "pages_blocks_layout102_block_sub_headings" CASCADE;
  DROP TABLE "pages_blocks_layout102_block" CASCADE;
  DROP TABLE "pages_blocks_layout245_block_sections" CASCADE;
  DROP TABLE "pages_blocks_layout245_block_buttons" CASCADE;
  DROP TABLE "pages_blocks_layout245_block" CASCADE;
  DROP TABLE "pages_blocks_layout216_block_stats" CASCADE;
  DROP TABLE "pages_blocks_layout216_block_buttons" CASCADE;
  DROP TABLE "pages_blocks_layout216_block" CASCADE;
  DROP TABLE "pages_blocks_layout18_block_features" CASCADE;
  DROP TABLE "pages_blocks_layout18_block" CASCADE;
  DROP TABLE "pages_blocks_layout13_block_logos" CASCADE;
  DROP TABLE "pages_blocks_layout13_block_buttons" CASCADE;
  DROP TABLE "pages_blocks_layout13_block" CASCADE;
  DROP TABLE "pages_blocks_blog_post_header_breadcrumbs" CASCADE;
  DROP TABLE "bph_social_links" CASCADE;
  DROP TABLE "pages_blocks_blog_post_header" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_cta" CASCADE;
  DROP TABLE "_pages_v_blocks_content_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_content" CASCADE;
  DROP TABLE "_pages_v_blocks_media_block" CASCADE;
  DROP TABLE "_pages_v_blocks_archive" CASCADE;
  DROP TABLE "_pages_v_blocks_form_block" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_faqs" CASCADE;
  DROP TABLE "_pages_v_blocks_faq" CASCADE;
  DROP TABLE "_pages_v_blocks_team_members_social_links" CASCADE;
  DROP TABLE "_pages_v_blocks_team_members" CASCADE;
  DROP TABLE "_pages_v_blocks_team" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_table_plans_features" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_table_plans" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_table" CASCADE;
  DROP TABLE "_pages_v_blocks_two_column_layout_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_two_column_layout" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_grid_features" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_grid_bottom_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_feature_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_header_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_header" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery_images" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_info_methods" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_info" CASCADE;
  DROP TABLE "_pages_v_blocks_blog_grid_categories" CASCADE;
  DROP TABLE "_pages_v_blocks_blog_grid_posts" CASCADE;
  DROP TABLE "_pages_v_blocks_blog_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_dynamic_blog_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_logo_list_logos" CASCADE;
  DROP TABLE "_pages_v_blocks_logo_list" CASCADE;
  DROP TABLE "_pages_v_blocks_layout90_block" CASCADE;
  DROP TABLE "_pages_v_blocks_layout10_block_sub_headings" CASCADE;
  DROP TABLE "_pages_v_blocks_layout10_block_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_layout10_block" CASCADE;
  DROP TABLE "_pages_v_blocks_layout102_block_sub_headings" CASCADE;
  DROP TABLE "_pages_v_blocks_layout102_block" CASCADE;
  DROP TABLE "_pages_v_blocks_layout245_block_sections" CASCADE;
  DROP TABLE "_pages_v_blocks_layout245_block_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_layout245_block" CASCADE;
  DROP TABLE "_pages_v_blocks_layout216_block_stats" CASCADE;
  DROP TABLE "_pages_v_blocks_layout216_block_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_layout216_block" CASCADE;
  DROP TABLE "_pages_v_blocks_layout18_block_features" CASCADE;
  DROP TABLE "_pages_v_blocks_layout18_block" CASCADE;
  DROP TABLE "_pages_v_blocks_layout13_block_logos" CASCADE;
  DROP TABLE "_pages_v_blocks_layout13_block_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_layout13_block" CASCADE;
  DROP TABLE "_pages_v_blocks_blog_post_header_breadcrumbs" CASCADE;
  DROP TABLE "_bph_social_links_v" CASCADE;
  DROP TABLE "_pages_v_blocks_blog_post_header" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "blogs_blocks_cta_buttons" CASCADE;
  DROP TABLE "blogs_blocks_cta" CASCADE;
  DROP TABLE "blogs_blocks_content_columns" CASCADE;
  DROP TABLE "blogs_blocks_content" CASCADE;
  DROP TABLE "blogs_blocks_media_block" CASCADE;
  DROP TABLE "blogs_blocks_archive" CASCADE;
  DROP TABLE "blogs_blocks_form_block" CASCADE;
  DROP TABLE "blogs_blocks_faq_faqs" CASCADE;
  DROP TABLE "blogs_blocks_faq" CASCADE;
  DROP TABLE "blogs_blocks_team_members_social_links" CASCADE;
  DROP TABLE "blogs_blocks_team_members" CASCADE;
  DROP TABLE "blogs_blocks_team" CASCADE;
  DROP TABLE "blogs_blocks_testimonials_testimonials" CASCADE;
  DROP TABLE "blogs_blocks_testimonials" CASCADE;
  DROP TABLE "blogs_blocks_pricing_table_plans_features" CASCADE;
  DROP TABLE "blogs_blocks_pricing_table_plans" CASCADE;
  DROP TABLE "blogs_blocks_pricing_table" CASCADE;
  DROP TABLE "blogs_blocks_two_column_layout_buttons" CASCADE;
  DROP TABLE "blogs_blocks_two_column_layout" CASCADE;
  DROP TABLE "blogs_blocks_feature_grid_features" CASCADE;
  DROP TABLE "blogs_blocks_feature_grid_bottom_buttons" CASCADE;
  DROP TABLE "blogs_blocks_feature_grid" CASCADE;
  DROP TABLE "blogs_blocks_header_buttons" CASCADE;
  DROP TABLE "blogs_blocks_header" CASCADE;
  DROP TABLE "blogs_blocks_gallery_images" CASCADE;
  DROP TABLE "blogs_blocks_gallery" CASCADE;
  DROP TABLE "blogs_blocks_contact_info_methods" CASCADE;
  DROP TABLE "blogs_blocks_contact_info" CASCADE;
  DROP TABLE "blogs_blocks_blog_grid_categories" CASCADE;
  DROP TABLE "blogs_blocks_blog_grid_posts" CASCADE;
  DROP TABLE "blogs_blocks_blog_grid" CASCADE;
  DROP TABLE "blogs_blocks_dynamic_blog_grid" CASCADE;
  DROP TABLE "blogs_populated_authors" CASCADE;
  DROP TABLE "blogs" CASCADE;
  DROP TABLE "blogs_rels" CASCADE;
  DROP TABLE "_blogs_v_blocks_cta_buttons" CASCADE;
  DROP TABLE "_blogs_v_blocks_cta" CASCADE;
  DROP TABLE "_blogs_v_blocks_content_columns" CASCADE;
  DROP TABLE "_blogs_v_blocks_content" CASCADE;
  DROP TABLE "_blogs_v_blocks_media_block" CASCADE;
  DROP TABLE "_blogs_v_blocks_archive" CASCADE;
  DROP TABLE "_blogs_v_blocks_form_block" CASCADE;
  DROP TABLE "_blogs_v_blocks_faq_faqs" CASCADE;
  DROP TABLE "_blogs_v_blocks_faq" CASCADE;
  DROP TABLE "_blogs_v_blocks_team_members_social_links" CASCADE;
  DROP TABLE "_blogs_v_blocks_team_members" CASCADE;
  DROP TABLE "_blogs_v_blocks_team" CASCADE;
  DROP TABLE "_blogs_v_blocks_testimonials_testimonials" CASCADE;
  DROP TABLE "_blogs_v_blocks_testimonials" CASCADE;
  DROP TABLE "_blogs_v_blocks_pricing_table_plans_features" CASCADE;
  DROP TABLE "_blogs_v_blocks_pricing_table_plans" CASCADE;
  DROP TABLE "_blogs_v_blocks_pricing_table" CASCADE;
  DROP TABLE "_blogs_v_blocks_two_column_layout_buttons" CASCADE;
  DROP TABLE "_blogs_v_blocks_two_column_layout" CASCADE;
  DROP TABLE "_blogs_v_blocks_feature_grid_features" CASCADE;
  DROP TABLE "_blogs_v_blocks_feature_grid_bottom_buttons" CASCADE;
  DROP TABLE "_blogs_v_blocks_feature_grid" CASCADE;
  DROP TABLE "_blogs_v_blocks_header_buttons" CASCADE;
  DROP TABLE "_blogs_v_blocks_header" CASCADE;
  DROP TABLE "_blogs_v_blocks_gallery_images" CASCADE;
  DROP TABLE "_blogs_v_blocks_gallery" CASCADE;
  DROP TABLE "_blogs_v_blocks_contact_info_methods" CASCADE;
  DROP TABLE "_blogs_v_blocks_contact_info" CASCADE;
  DROP TABLE "_blogs_v_blocks_blog_grid_categories" CASCADE;
  DROP TABLE "_blogs_v_blocks_blog_grid_posts" CASCADE;
  DROP TABLE "_blogs_v_blocks_blog_grid" CASCADE;
  DROP TABLE "_blogs_v_blocks_dynamic_blog_grid" CASCADE;
  DROP TABLE "_blogs_v_version_populated_authors" CASCADE;
  DROP TABLE "_blogs_v" CASCADE;
  DROP TABLE "_blogs_v_rels" CASCADE;
  DROP TABLE "courses_blocks_cta_buttons" CASCADE;
  DROP TABLE "courses_blocks_cta" CASCADE;
  DROP TABLE "courses_blocks_content_columns" CASCADE;
  DROP TABLE "courses_blocks_content" CASCADE;
  DROP TABLE "courses_blocks_media_block" CASCADE;
  DROP TABLE "courses_blocks_archive" CASCADE;
  DROP TABLE "courses_blocks_form_block" CASCADE;
  DROP TABLE "courses_blocks_faq_faqs" CASCADE;
  DROP TABLE "courses_blocks_faq" CASCADE;
  DROP TABLE "courses_blocks_team_members_social_links" CASCADE;
  DROP TABLE "courses_blocks_team_members" CASCADE;
  DROP TABLE "courses_blocks_team" CASCADE;
  DROP TABLE "courses_blocks_testimonials_testimonials" CASCADE;
  DROP TABLE "courses_blocks_testimonials" CASCADE;
  DROP TABLE "courses_blocks_pricing_table_plans_features" CASCADE;
  DROP TABLE "courses_blocks_pricing_table_plans" CASCADE;
  DROP TABLE "courses_blocks_pricing_table" CASCADE;
  DROP TABLE "courses_blocks_two_column_layout_buttons" CASCADE;
  DROP TABLE "courses_blocks_two_column_layout" CASCADE;
  DROP TABLE "courses_blocks_feature_grid_features" CASCADE;
  DROP TABLE "courses_blocks_feature_grid_bottom_buttons" CASCADE;
  DROP TABLE "courses_blocks_feature_grid" CASCADE;
  DROP TABLE "courses_blocks_header_buttons" CASCADE;
  DROP TABLE "courses_blocks_header" CASCADE;
  DROP TABLE "courses_blocks_gallery_images" CASCADE;
  DROP TABLE "courses_blocks_gallery" CASCADE;
  DROP TABLE "courses_blocks_contact_info_methods" CASCADE;
  DROP TABLE "courses_blocks_contact_info" CASCADE;
  DROP TABLE "courses_blocks_blog_grid_categories" CASCADE;
  DROP TABLE "courses_blocks_blog_grid_posts" CASCADE;
  DROP TABLE "courses_blocks_blog_grid" CASCADE;
  DROP TABLE "courses_blocks_dynamic_blog_grid" CASCADE;
  DROP TABLE "courses_populated_authors" CASCADE;
  DROP TABLE "courses" CASCADE;
  DROP TABLE "courses_rels" CASCADE;
  DROP TABLE "_courses_v_blocks_cta_buttons" CASCADE;
  DROP TABLE "_courses_v_blocks_cta" CASCADE;
  DROP TABLE "_courses_v_blocks_content_columns" CASCADE;
  DROP TABLE "_courses_v_blocks_content" CASCADE;
  DROP TABLE "_courses_v_blocks_media_block" CASCADE;
  DROP TABLE "_courses_v_blocks_archive" CASCADE;
  DROP TABLE "_courses_v_blocks_form_block" CASCADE;
  DROP TABLE "_courses_v_blocks_faq_faqs" CASCADE;
  DROP TABLE "_courses_v_blocks_faq" CASCADE;
  DROP TABLE "_courses_v_blocks_team_members_social_links" CASCADE;
  DROP TABLE "_courses_v_blocks_team_members" CASCADE;
  DROP TABLE "_courses_v_blocks_team" CASCADE;
  DROP TABLE "_courses_v_blocks_testimonials_testimonials" CASCADE;
  DROP TABLE "_courses_v_blocks_testimonials" CASCADE;
  DROP TABLE "_courses_v_blocks_pricing_table_plans_features" CASCADE;
  DROP TABLE "_courses_v_blocks_pricing_table_plans" CASCADE;
  DROP TABLE "_courses_v_blocks_pricing_table" CASCADE;
  DROP TABLE "_courses_v_blocks_two_column_layout_buttons" CASCADE;
  DROP TABLE "_courses_v_blocks_two_column_layout" CASCADE;
  DROP TABLE "_courses_v_blocks_feature_grid_features" CASCADE;
  DROP TABLE "_courses_v_blocks_feature_grid_bottom_buttons" CASCADE;
  DROP TABLE "_courses_v_blocks_feature_grid" CASCADE;
  DROP TABLE "_courses_v_blocks_header_buttons" CASCADE;
  DROP TABLE "_courses_v_blocks_header" CASCADE;
  DROP TABLE "_courses_v_blocks_gallery_images" CASCADE;
  DROP TABLE "_courses_v_blocks_gallery" CASCADE;
  DROP TABLE "_courses_v_blocks_contact_info_methods" CASCADE;
  DROP TABLE "_courses_v_blocks_contact_info" CASCADE;
  DROP TABLE "_courses_v_blocks_blog_grid_categories" CASCADE;
  DROP TABLE "_courses_v_blocks_blog_grid_posts" CASCADE;
  DROP TABLE "_courses_v_blocks_blog_grid" CASCADE;
  DROP TABLE "_courses_v_blocks_dynamic_blog_grid" CASCADE;
  DROP TABLE "_courses_v_version_populated_authors" CASCADE;
  DROP TABLE "_courses_v" CASCADE;
  DROP TABLE "_courses_v_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "categories_breadcrumbs" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "forms_blocks_checkbox" CASCADE;
  DROP TABLE "forms_blocks_country" CASCADE;
  DROP TABLE "forms_blocks_email" CASCADE;
  DROP TABLE "forms_blocks_message" CASCADE;
  DROP TABLE "forms_blocks_number" CASCADE;
  DROP TABLE "forms_blocks_select_options" CASCADE;
  DROP TABLE "forms_blocks_select" CASCADE;
  DROP TABLE "forms_blocks_state" CASCADE;
  DROP TABLE "forms_blocks_text" CASCADE;
  DROP TABLE "forms_blocks_textarea" CASCADE;
  DROP TABLE "forms_emails" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "form_submissions_submission_data" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "search_categories" CASCADE;
  DROP TABLE "search" CASCADE;
  DROP TABLE "search_rels" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "header_nav_items" CASCADE;
  DROP TABLE "header_action_buttons" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  DROP TABLE "footer_link_sections_links" CASCADE;
  DROP TABLE "footer_link_sections" CASCADE;
  DROP TABLE "footer_social_links" CASCADE;
  DROP TABLE "footer_legal_links" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TABLE "global_cta_buttons" CASCADE;
  DROP TABLE "global_cta" CASCADE;
  DROP TABLE "blog_overview_blocks_cta_buttons" CASCADE;
  DROP TABLE "blog_overview_blocks_cta" CASCADE;
  DROP TABLE "blog_overview_blocks_content_columns" CASCADE;
  DROP TABLE "blog_overview_blocks_content" CASCADE;
  DROP TABLE "blog_overview_blocks_media_block" CASCADE;
  DROP TABLE "blog_overview_blocks_archive" CASCADE;
  DROP TABLE "blog_overview_blocks_form_block" CASCADE;
  DROP TABLE "blog_overview_blocks_faq_faqs" CASCADE;
  DROP TABLE "blog_overview_blocks_faq" CASCADE;
  DROP TABLE "blog_overview_blocks_team_members_social_links" CASCADE;
  DROP TABLE "blog_overview_blocks_team_members" CASCADE;
  DROP TABLE "blog_overview_blocks_team" CASCADE;
  DROP TABLE "blog_overview_blocks_testimonials_testimonials" CASCADE;
  DROP TABLE "blog_overview_blocks_testimonials" CASCADE;
  DROP TABLE "blog_overview_blocks_pricing_table_plans_features" CASCADE;
  DROP TABLE "blog_overview_blocks_pricing_table_plans" CASCADE;
  DROP TABLE "blog_overview_blocks_pricing_table" CASCADE;
  DROP TABLE "blog_overview_blocks_two_column_layout_buttons" CASCADE;
  DROP TABLE "blog_overview_blocks_two_column_layout" CASCADE;
  DROP TABLE "blog_overview_blocks_feature_grid_features" CASCADE;
  DROP TABLE "blog_overview_blocks_feature_grid_bottom_buttons" CASCADE;
  DROP TABLE "blog_overview_blocks_feature_grid" CASCADE;
  DROP TABLE "blog_overview_blocks_header_buttons" CASCADE;
  DROP TABLE "blog_overview_blocks_header" CASCADE;
  DROP TABLE "blog_overview_blocks_gallery_images" CASCADE;
  DROP TABLE "blog_overview_blocks_gallery" CASCADE;
  DROP TABLE "blog_overview_blocks_contact_info_methods" CASCADE;
  DROP TABLE "blog_overview_blocks_contact_info" CASCADE;
  DROP TABLE "blog_overview_blocks_blog_grid_categories" CASCADE;
  DROP TABLE "blog_overview_blocks_blog_grid_posts" CASCADE;
  DROP TABLE "blog_overview_blocks_blog_grid" CASCADE;
  DROP TABLE "blog_overview_blocks_dynamic_blog_grid" CASCADE;
  DROP TABLE "blog_overview" CASCADE;
  DROP TABLE "blog_overview_rels" CASCADE;
  DROP TABLE "course_overview_blocks_cta_buttons" CASCADE;
  DROP TABLE "course_overview_blocks_cta" CASCADE;
  DROP TABLE "course_overview_blocks_content_columns" CASCADE;
  DROP TABLE "course_overview_blocks_content" CASCADE;
  DROP TABLE "course_overview_blocks_media_block" CASCADE;
  DROP TABLE "course_overview_blocks_archive" CASCADE;
  DROP TABLE "course_overview_blocks_form_block" CASCADE;
  DROP TABLE "course_overview_blocks_faq_faqs" CASCADE;
  DROP TABLE "course_overview_blocks_faq" CASCADE;
  DROP TABLE "course_overview_blocks_team_members_social_links" CASCADE;
  DROP TABLE "course_overview_blocks_team_members" CASCADE;
  DROP TABLE "course_overview_blocks_team" CASCADE;
  DROP TABLE "course_overview_blocks_testimonials_testimonials" CASCADE;
  DROP TABLE "course_overview_blocks_testimonials" CASCADE;
  DROP TABLE "course_overview_blocks_pricing_table_plans_features" CASCADE;
  DROP TABLE "course_overview_blocks_pricing_table_plans" CASCADE;
  DROP TABLE "course_overview_blocks_pricing_table" CASCADE;
  DROP TABLE "course_overview_blocks_two_column_layout_buttons" CASCADE;
  DROP TABLE "course_overview_blocks_two_column_layout" CASCADE;
  DROP TABLE "course_overview_blocks_feature_grid_features" CASCADE;
  DROP TABLE "course_overview_blocks_feature_grid_bottom_buttons" CASCADE;
  DROP TABLE "course_overview_blocks_feature_grid" CASCADE;
  DROP TABLE "course_overview_blocks_header_buttons" CASCADE;
  DROP TABLE "course_overview_blocks_header" CASCADE;
  DROP TABLE "course_overview_blocks_gallery_images" CASCADE;
  DROP TABLE "course_overview_blocks_gallery" CASCADE;
  DROP TABLE "course_overview_blocks_contact_info_methods" CASCADE;
  DROP TABLE "course_overview_blocks_contact_info" CASCADE;
  DROP TABLE "course_overview_blocks_blog_grid_categories" CASCADE;
  DROP TABLE "course_overview_blocks_blog_grid_posts" CASCADE;
  DROP TABLE "course_overview_blocks_blog_grid" CASCADE;
  DROP TABLE "course_overview_blocks_dynamic_blog_grid" CASCADE;
  DROP TABLE "course_overview" CASCADE;
  DROP TABLE "course_overview_rels" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_cta_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_cta_layout";
  DROP TYPE "public"."enum_pages_blocks_cta_cta_type";
  DROP TYPE "public"."enum_pages_blocks_cta_color_scheme";
  DROP TYPE "public"."enum_pages_blocks_content_columns_size";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_content_color_scheme";
  DROP TYPE "public"."enum_pages_blocks_media_block_color_scheme";
  DROP TYPE "public"."enum_pages_blocks_archive_populate_by";
  DROP TYPE "public"."enum_pages_blocks_archive_relation_to";
  DROP TYPE "public"."enum_pages_blocks_archive_color_scheme";
  DROP TYPE "public"."enum_pages_blocks_form_block_color_scheme";
  DROP TYPE "public"."enum_pages_blocks_faq_color_scheme";
  DROP TYPE "public"."enum_pages_blocks_team_members_social_links_platform";
  DROP TYPE "public"."enum_pages_blocks_team_color_scheme";
  DROP TYPE "public"."enum_pages_blocks_testimonials_color_scheme";
  DROP TYPE "public"."enum_pages_blocks_pricing_table_color_scheme";
  DROP TYPE "public"."enum_pages_blocks_two_column_layout_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_two_column_layout_image_position";
  DROP TYPE "public"."enum_pages_blocks_two_column_layout_color_scheme";
  DROP TYPE "public"."enum_course_ovr_blck__grid_ftr_btn_var";
  DROP TYPE "public"."enum_pages_blocks_feature_grid_bottom_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_feature_grid_columns";
  DROP TYPE "public"."enum_pages_blocks_feature_grid_item_type";
  DROP TYPE "public"."enum_pages_blocks_feature_grid_color_scheme";
  DROP TYPE "public"."enum_pages_blocks_header_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_header_layout";
  DROP TYPE "public"."enum_pages_blocks_header_image_position";
  DROP TYPE "public"."enum_pages_blocks_header_color_scheme";
  DROP TYPE "public"."enum_pages_blocks_gallery_columns";
  DROP TYPE "public"."enum_pages_blocks_gallery_color_scheme";
  DROP TYPE "public"."enum_pages_blocks_contact_info_methods_icon";
  DROP TYPE "public"."enum_pages_blocks_contact_info_color_scheme";
  DROP TYPE "public"."enum_pages_blocks_blog_grid_color_scheme";
  DROP TYPE "public"."enum_pages_blocks_dynamic_blog_grid_collection_type";
  DROP TYPE "public"."enum_pages_blocks_dynamic_blog_grid_blog_source";
  DROP TYPE "public"."enum_pages_blocks_dynamic_blog_grid_color_scheme";
  DROP TYPE "public"."enum_pages_blocks_layout10_block_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_layout10_block_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_layout245_block_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_layout245_block_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_layout216_block_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_layout216_block_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_layout13_block_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_layout13_block_buttons_size";
  DROP TYPE "public"."enum_bph_social_links_platform";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_cta_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_cta_layout";
  DROP TYPE "public"."enum__pages_v_blocks_cta_cta_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_color_scheme";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_content_color_scheme";
  DROP TYPE "public"."enum__pages_v_blocks_media_block_color_scheme";
  DROP TYPE "public"."enum__pages_v_blocks_archive_populate_by";
  DROP TYPE "public"."enum__pages_v_blocks_archive_relation_to";
  DROP TYPE "public"."enum__pages_v_blocks_archive_color_scheme";
  DROP TYPE "public"."enum__pages_v_blocks_form_block_color_scheme";
  DROP TYPE "public"."enum__pages_v_blocks_faq_color_scheme";
  DROP TYPE "public"."enum__pages_v_blocks_team_members_social_links_platform";
  DROP TYPE "public"."enum__pages_v_blocks_team_color_scheme";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_color_scheme";
  DROP TYPE "public"."enum__pages_v_blocks_pricing_table_color_scheme";
  DROP TYPE "public"."enum__pages_v_blocks_two_column_layout_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_two_column_layout_image_position";
  DROP TYPE "public"."enum__pages_v_blocks_two_column_layout_color_scheme";
  DROP TYPE "public"."enum__pages_v_blocks_feature_grid_bottom_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_feature_grid_columns";
  DROP TYPE "public"."enum__pages_v_blocks_feature_grid_item_type";
  DROP TYPE "public"."enum__pages_v_blocks_feature_grid_color_scheme";
  DROP TYPE "public"."enum__pages_v_blocks_header_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_header_layout";
  DROP TYPE "public"."enum__pages_v_blocks_header_image_position";
  DROP TYPE "public"."enum__pages_v_blocks_header_color_scheme";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_columns";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_color_scheme";
  DROP TYPE "public"."enum__pages_v_blocks_contact_info_methods_icon";
  DROP TYPE "public"."enum__pages_v_blocks_contact_info_color_scheme";
  DROP TYPE "public"."enum__pages_v_blocks_blog_grid_color_scheme";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_blog_grid_collection_type";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_blog_grid_blog_source";
  DROP TYPE "public"."enum__pages_v_blocks_dynamic_blog_grid_color_scheme";
  DROP TYPE "public"."enum__pages_v_blocks_layout10_block_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_layout10_block_buttons_size";
  DROP TYPE "public"."enum__pages_v_blocks_layout245_block_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_layout245_block_buttons_size";
  DROP TYPE "public"."enum__pages_v_blocks_layout216_block_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_layout216_block_buttons_size";
  DROP TYPE "public"."enum__pages_v_blocks_layout13_block_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_layout13_block_buttons_size";
  DROP TYPE "public"."enum__bph_social_links_v_platform";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_blogs_blocks_cta_buttons_variant";
  DROP TYPE "public"."enum_blogs_blocks_cta_layout";
  DROP TYPE "public"."enum_blogs_blocks_cta_cta_type";
  DROP TYPE "public"."enum_blogs_blocks_cta_color_scheme";
  DROP TYPE "public"."enum_blogs_blocks_content_columns_size";
  DROP TYPE "public"."enum_blogs_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_blogs_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_blogs_blocks_content_color_scheme";
  DROP TYPE "public"."enum_blogs_blocks_media_block_color_scheme";
  DROP TYPE "public"."enum_blogs_blocks_archive_populate_by";
  DROP TYPE "public"."enum_blogs_blocks_archive_relation_to";
  DROP TYPE "public"."enum_blogs_blocks_archive_color_scheme";
  DROP TYPE "public"."enum_blogs_blocks_form_block_color_scheme";
  DROP TYPE "public"."enum_blogs_blocks_faq_color_scheme";
  DROP TYPE "public"."enum_blogs_blocks_team_members_social_links_platform";
  DROP TYPE "public"."enum_blogs_blocks_team_color_scheme";
  DROP TYPE "public"."enum_blogs_blocks_testimonials_color_scheme";
  DROP TYPE "public"."enum_blogs_blocks_pricing_table_color_scheme";
  DROP TYPE "public"."enum_blogs_blocks_two_column_layout_buttons_variant";
  DROP TYPE "public"."enum_blogs_blocks_two_column_layout_image_position";
  DROP TYPE "public"."enum_blogs_blocks_two_column_layout_color_scheme";
  DROP TYPE "public"."enum_blogs_blocks_feature_grid_bottom_buttons_variant";
  DROP TYPE "public"."enum_blogs_blocks_feature_grid_columns";
  DROP TYPE "public"."enum_blogs_blocks_feature_grid_item_type";
  DROP TYPE "public"."enum_blogs_blocks_feature_grid_color_scheme";
  DROP TYPE "public"."enum_blogs_blocks_header_buttons_variant";
  DROP TYPE "public"."enum_blogs_blocks_header_layout";
  DROP TYPE "public"."enum_blogs_blocks_header_image_position";
  DROP TYPE "public"."enum_blogs_blocks_header_color_scheme";
  DROP TYPE "public"."enum_blogs_blocks_gallery_columns";
  DROP TYPE "public"."enum_blogs_blocks_gallery_color_scheme";
  DROP TYPE "public"."enum_blogs_blocks_contact_info_methods_icon";
  DROP TYPE "public"."enum_blogs_blocks_contact_info_color_scheme";
  DROP TYPE "public"."enum_blogs_blocks_blog_grid_color_scheme";
  DROP TYPE "public"."enum_blogs_blocks_dynamic_blog_grid_collection_type";
  DROP TYPE "public"."enum_blogs_blocks_dynamic_blog_grid_blog_source";
  DROP TYPE "public"."enum_blogs_blocks_dynamic_blog_grid_color_scheme";
  DROP TYPE "public"."enum_blogs_status";
  DROP TYPE "public"."enum__blogs_v_blocks_cta_buttons_variant";
  DROP TYPE "public"."enum__blogs_v_blocks_cta_layout";
  DROP TYPE "public"."enum__blogs_v_blocks_cta_cta_type";
  DROP TYPE "public"."enum__blogs_v_blocks_cta_color_scheme";
  DROP TYPE "public"."enum__blogs_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__blogs_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__blogs_v_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum__blogs_v_blocks_content_color_scheme";
  DROP TYPE "public"."enum__blogs_v_blocks_media_block_color_scheme";
  DROP TYPE "public"."enum__blogs_v_blocks_archive_populate_by";
  DROP TYPE "public"."enum__blogs_v_blocks_archive_relation_to";
  DROP TYPE "public"."enum__blogs_v_blocks_archive_color_scheme";
  DROP TYPE "public"."enum__blogs_v_blocks_form_block_color_scheme";
  DROP TYPE "public"."enum__blogs_v_blocks_faq_color_scheme";
  DROP TYPE "public"."enum__blogs_v_blocks_team_members_social_links_platform";
  DROP TYPE "public"."enum__blogs_v_blocks_team_color_scheme";
  DROP TYPE "public"."enum__blogs_v_blocks_testimonials_color_scheme";
  DROP TYPE "public"."enum__blogs_v_blocks_pricing_table_color_scheme";
  DROP TYPE "public"."enum__blogs_v_blocks_two_column_layout_buttons_variant";
  DROP TYPE "public"."enum__blogs_v_blocks_two_column_layout_image_position";
  DROP TYPE "public"."enum__blogs_v_blocks_two_column_layout_color_scheme";
  DROP TYPE "public"."enum__blogs_v_blocks_feature_grid_bottom_buttons_variant";
  DROP TYPE "public"."enum__blogs_v_blocks_feature_grid_columns";
  DROP TYPE "public"."enum__blogs_v_blocks_feature_grid_item_type";
  DROP TYPE "public"."enum__blogs_v_blocks_feature_grid_color_scheme";
  DROP TYPE "public"."enum__blogs_v_blocks_header_buttons_variant";
  DROP TYPE "public"."enum__blogs_v_blocks_header_layout";
  DROP TYPE "public"."enum__blogs_v_blocks_header_image_position";
  DROP TYPE "public"."enum__blogs_v_blocks_header_color_scheme";
  DROP TYPE "public"."enum__blogs_v_blocks_gallery_columns";
  DROP TYPE "public"."enum__blogs_v_blocks_gallery_color_scheme";
  DROP TYPE "public"."enum__blogs_v_blocks_contact_info_methods_icon";
  DROP TYPE "public"."enum__blogs_v_blocks_contact_info_color_scheme";
  DROP TYPE "public"."enum__blogs_v_blocks_blog_grid_color_scheme";
  DROP TYPE "public"."enum__blogs_v_blocks_dynamic_blog_grid_collection_type";
  DROP TYPE "public"."enum__blogs_v_blocks_dynamic_blog_grid_blog_source";
  DROP TYPE "public"."enum__blogs_v_blocks_dynamic_blog_grid_color_scheme";
  DROP TYPE "public"."enum__blogs_v_version_status";
  DROP TYPE "public"."enum_courses_blocks_cta_buttons_variant";
  DROP TYPE "public"."enum_courses_blocks_cta_layout";
  DROP TYPE "public"."enum_courses_blocks_cta_cta_type";
  DROP TYPE "public"."enum_courses_blocks_cta_color_scheme";
  DROP TYPE "public"."enum_courses_blocks_content_columns_size";
  DROP TYPE "public"."enum_courses_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_courses_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_courses_blocks_content_color_scheme";
  DROP TYPE "public"."enum_courses_blocks_media_block_color_scheme";
  DROP TYPE "public"."enum_courses_blocks_archive_populate_by";
  DROP TYPE "public"."enum_courses_blocks_archive_relation_to";
  DROP TYPE "public"."enum_courses_blocks_archive_color_scheme";
  DROP TYPE "public"."enum_courses_blocks_form_block_color_scheme";
  DROP TYPE "public"."enum_courses_blocks_faq_color_scheme";
  DROP TYPE "public"."enum_courses_blocks_team_members_social_links_platform";
  DROP TYPE "public"."enum_courses_blocks_team_color_scheme";
  DROP TYPE "public"."enum_courses_blocks_testimonials_color_scheme";
  DROP TYPE "public"."enum_courses_blocks_pricing_table_color_scheme";
  DROP TYPE "public"."enum_courses_blocks_two_column_layout_buttons_variant";
  DROP TYPE "public"."enum_courses_blocks_two_column_layout_image_position";
  DROP TYPE "public"."enum_courses_blocks_two_column_layout_color_scheme";
  DROP TYPE "public"."enum_courses_blocks_feature_grid_bottom_buttons_variant";
  DROP TYPE "public"."enum_courses_blocks_feature_grid_columns";
  DROP TYPE "public"."enum_courses_blocks_feature_grid_item_type";
  DROP TYPE "public"."enum_courses_blocks_feature_grid_color_scheme";
  DROP TYPE "public"."enum_courses_blocks_header_buttons_variant";
  DROP TYPE "public"."enum_courses_blocks_header_layout";
  DROP TYPE "public"."enum_courses_blocks_header_image_position";
  DROP TYPE "public"."enum_courses_blocks_header_color_scheme";
  DROP TYPE "public"."enum_courses_blocks_gallery_columns";
  DROP TYPE "public"."enum_courses_blocks_gallery_color_scheme";
  DROP TYPE "public"."enum_courses_blocks_contact_info_methods_icon";
  DROP TYPE "public"."enum_courses_blocks_contact_info_color_scheme";
  DROP TYPE "public"."enum_courses_blocks_blog_grid_color_scheme";
  DROP TYPE "public"."enum_courses_blocks_dynamic_blog_grid_collection_type";
  DROP TYPE "public"."enum_courses_blocks_dynamic_blog_grid_blog_source";
  DROP TYPE "public"."enum_courses_blocks_dynamic_blog_grid_color_scheme";
  DROP TYPE "public"."enum_courses_status";
  DROP TYPE "public"."enum__courses_v_blocks_cta_buttons_variant";
  DROP TYPE "public"."enum__courses_v_blocks_cta_layout";
  DROP TYPE "public"."enum__courses_v_blocks_cta_cta_type";
  DROP TYPE "public"."enum__courses_v_blocks_cta_color_scheme";
  DROP TYPE "public"."enum__courses_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__courses_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__courses_v_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum__courses_v_blocks_content_color_scheme";
  DROP TYPE "public"."enum__courses_v_blocks_media_block_color_scheme";
  DROP TYPE "public"."enum__courses_v_blocks_archive_populate_by";
  DROP TYPE "public"."enum__courses_v_blocks_archive_relation_to";
  DROP TYPE "public"."enum__courses_v_blocks_archive_color_scheme";
  DROP TYPE "public"."enum__courses_v_blocks_form_block_color_scheme";
  DROP TYPE "public"."enum__courses_v_blocks_faq_color_scheme";
  DROP TYPE "public"."enum__courses_v_blocks_team_members_social_links_platform";
  DROP TYPE "public"."enum__courses_v_blocks_team_color_scheme";
  DROP TYPE "public"."enum__courses_v_blocks_testimonials_color_scheme";
  DROP TYPE "public"."enum__courses_v_blocks_pricing_table_color_scheme";
  DROP TYPE "public"."enum__courses_v_blocks_two_column_layout_buttons_variant";
  DROP TYPE "public"."enum__courses_v_blocks_two_column_layout_image_position";
  DROP TYPE "public"."enum__courses_v_blocks_two_column_layout_color_scheme";
  DROP TYPE "public"."enum__courses_v_blocks_feature_grid_bottom_buttons_variant";
  DROP TYPE "public"."enum__courses_v_blocks_feature_grid_columns";
  DROP TYPE "public"."enum__courses_v_blocks_feature_grid_item_type";
  DROP TYPE "public"."enum__courses_v_blocks_feature_grid_color_scheme";
  DROP TYPE "public"."enum__courses_v_blocks_header_buttons_variant";
  DROP TYPE "public"."enum__courses_v_blocks_header_layout";
  DROP TYPE "public"."enum__courses_v_blocks_header_image_position";
  DROP TYPE "public"."enum__courses_v_blocks_header_color_scheme";
  DROP TYPE "public"."enum__courses_v_blocks_gallery_columns";
  DROP TYPE "public"."enum__courses_v_blocks_gallery_color_scheme";
  DROP TYPE "public"."enum__courses_v_blocks_contact_info_methods_icon";
  DROP TYPE "public"."enum__courses_v_blocks_contact_info_color_scheme";
  DROP TYPE "public"."enum__courses_v_blocks_blog_grid_color_scheme";
  DROP TYPE "public"."enum__courses_v_blocks_dynamic_blog_grid_collection_type";
  DROP TYPE "public"."enum__courses_v_blocks_dynamic_blog_grid_blog_source";
  DROP TYPE "public"."enum__courses_v_blocks_dynamic_blog_grid_color_scheme";
  DROP TYPE "public"."enum__courses_v_version_status";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_forms_confirmation_type";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_header_nav_items_link_type";
  DROP TYPE "public"."enum_header_action_buttons_link_type";
  DROP TYPE "public"."enum_header_action_buttons_variant";
  DROP TYPE "public"."enum_footer_link_sections_links_link_type";
  DROP TYPE "public"."enum_footer_social_links_platform";
  DROP TYPE "public"."enum_footer_legal_links_link_type";
  DROP TYPE "public"."enum_footer_color_scheme";
  DROP TYPE "public"."enum_global_cta_buttons_variant";
  DROP TYPE "public"."enum_global_cta_layout";
  DROP TYPE "public"."enum_global_cta_cta_type";
  DROP TYPE "public"."enum_global_cta_color_scheme";
  DROP TYPE "public"."enum_blog_overview_blocks_cta_buttons_variant";
  DROP TYPE "public"."enum_blog_overview_blocks_cta_layout";
  DROP TYPE "public"."enum_blog_overview_blocks_cta_cta_type";
  DROP TYPE "public"."enum_blog_overview_blocks_cta_color_scheme";
  DROP TYPE "public"."enum_blog_overview_blocks_content_columns_size";
  DROP TYPE "public"."enum_blog_overview_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_blog_overview_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_blog_overview_blocks_content_color_scheme";
  DROP TYPE "public"."enum_blog_overview_blocks_media_block_color_scheme";
  DROP TYPE "public"."enum_blog_overview_blocks_archive_populate_by";
  DROP TYPE "public"."enum_blog_overview_blocks_archive_relation_to";
  DROP TYPE "public"."enum_blog_overview_blocks_archive_color_scheme";
  DROP TYPE "public"."enum_blog_overview_blocks_form_block_color_scheme";
  DROP TYPE "public"."enum_blog_overview_blocks_faq_color_scheme";
  DROP TYPE "public"."enum_blog_overview_blocks_team_members_social_links_platform";
  DROP TYPE "public"."enum_blog_overview_blocks_team_color_scheme";
  DROP TYPE "public"."enum_blog_overview_blocks_testimonials_color_scheme";
  DROP TYPE "public"."enum_blog_overview_blocks_pricing_table_color_scheme";
  DROP TYPE "public"."enum_blog_overview_blocks_two_column_layout_buttons_variant";
  DROP TYPE "public"."enum_blog_overview_blocks_two_column_layout_image_position";
  DROP TYPE "public"."enum_blog_overview_blocks_two_column_layout_color_scheme";
  DROP TYPE "public"."enum_blog_overview_blocks_feature_grid_bottom_buttons_variant";
  DROP TYPE "public"."enum_blog_overview_blocks_feature_grid_columns";
  DROP TYPE "public"."enum_blog_overview_blocks_feature_grid_item_type";
  DROP TYPE "public"."enum_blog_overview_blocks_feature_grid_color_scheme";
  DROP TYPE "public"."enum_blog_overview_blocks_header_buttons_variant";
  DROP TYPE "public"."enum_blog_overview_blocks_header_layout";
  DROP TYPE "public"."enum_blog_overview_blocks_header_image_position";
  DROP TYPE "public"."enum_blog_overview_blocks_header_color_scheme";
  DROP TYPE "public"."enum_blog_overview_blocks_gallery_columns";
  DROP TYPE "public"."enum_blog_overview_blocks_gallery_color_scheme";
  DROP TYPE "public"."enum_blog_overview_blocks_contact_info_methods_icon";
  DROP TYPE "public"."enum_blog_overview_blocks_contact_info_color_scheme";
  DROP TYPE "public"."enum_blog_overview_blocks_blog_grid_color_scheme";
  DROP TYPE "public"."enum_blog_overview_blocks_dynamic_blog_grid_collection_type";
  DROP TYPE "public"."enum_blog_overview_blocks_dynamic_blog_grid_blog_source";
  DROP TYPE "public"."enum_blog_overview_blocks_dynamic_blog_grid_color_scheme";
  DROP TYPE "public"."enum_course_overview_blocks_cta_buttons_variant";
  DROP TYPE "public"."enum_course_overview_blocks_cta_layout";
  DROP TYPE "public"."enum_course_overview_blocks_cta_cta_type";
  DROP TYPE "public"."enum_course_overview_blocks_cta_color_scheme";
  DROP TYPE "public"."enum_course_overview_blocks_content_columns_size";
  DROP TYPE "public"."enum_course_overview_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_course_overview_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_course_overview_blocks_content_color_scheme";
  DROP TYPE "public"."enum_course_overview_blocks_media_block_color_scheme";
  DROP TYPE "public"."enum_course_overview_blocks_archive_populate_by";
  DROP TYPE "public"."enum_course_overview_blocks_archive_relation_to";
  DROP TYPE "public"."enum_course_overview_blocks_archive_color_scheme";
  DROP TYPE "public"."enum_course_overview_blocks_form_block_color_scheme";
  DROP TYPE "public"."enum_course_overview_blocks_faq_color_scheme";
  DROP TYPE "public"."enum_course_overview_blocks_team_members_social_links_platform";
  DROP TYPE "public"."enum_course_overview_blocks_team_color_scheme";
  DROP TYPE "public"."enum_course_overview_blocks_testimonials_color_scheme";
  DROP TYPE "public"."enum_course_overview_blocks_pricing_table_color_scheme";
  DROP TYPE "public"."enum_course_overview_blocks_two_column_layout_buttons_variant";
  DROP TYPE "public"."enum_course_overview_blocks_two_column_layout_image_position";
  DROP TYPE "public"."enum_course_overview_blocks_two_column_layout_color_scheme";
  DROP TYPE "public"."enum_course_overview_blocks_feature_grid_bottom_buttons_variant";
  DROP TYPE "public"."enum_course_overview_blocks_feature_grid_columns";
  DROP TYPE "public"."enum_course_overview_blocks_feature_grid_item_type";
  DROP TYPE "public"."enum_course_overview_blocks_feature_grid_color_scheme";
  DROP TYPE "public"."enum_course_overview_blocks_header_buttons_variant";
  DROP TYPE "public"."enum_course_overview_blocks_header_layout";
  DROP TYPE "public"."enum_course_overview_blocks_header_image_position";
  DROP TYPE "public"."enum_course_overview_blocks_header_color_scheme";
  DROP TYPE "public"."enum_course_overview_blocks_gallery_columns";
  DROP TYPE "public"."enum_course_overview_blocks_gallery_color_scheme";
  DROP TYPE "public"."enum_course_overview_blocks_contact_info_methods_icon";
  DROP TYPE "public"."enum_course_overview_blocks_contact_info_color_scheme";
  DROP TYPE "public"."enum_course_overview_blocks_blog_grid_color_scheme";
  DROP TYPE "public"."enum_course_overview_blocks_dynamic_blog_grid_collection_type";
  DROP TYPE "public"."enum_course_overview_blocks_dynamic_blog_grid_blog_source";
  DROP TYPE "public"."enum_course_overview_blocks_dynamic_blog_grid_color_scheme";`)
}
