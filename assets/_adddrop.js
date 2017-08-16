
// ADD CLASSES TO ADD-DROP TABLES
jQuery('#body_add_drop caption:contains("Current Waiver Claims for")').parent('table').addClass('table1');
jQuery('#body_add_drop caption:contains("Add/Drop For")').parent('table').addClass('table2');
jQuery('#body_add_drop caption:contains("Select Player To Add")').parent('table').addClass('table2-sub1');
jQuery('#body_add_drop caption:contains("Select Player To Drop")').parent('table').addClass('table2-sub2');
jQuery('#body_add_drop b:contains("To Add:")').closest('table').addClass('table3');
jQuery('#body_add_drop .table1').parent('div').addClass('resize');

jQuery('#body_add_drop .table2-sub1 td:contains("Locked Player")').addClass('locked-warning');
jQuery('#body_add_drop .table2').find('#add_filt_nfl').closest('td').addClass('add-sorting');

// ADD CLASSES TABLE HEADERS FOR ADD AND DROP TABLE BOXES
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Name")').closest('tr').addClass('head-th');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Name")').closest('td').addClass('waiv-name');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Team")').closest('td').addClass('waiv-team');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Pos")').closest('td').addClass('waiv-pos');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Bye")').closest('td').addClass('waiv-bye');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Salary")').closest('td').addClass('waiv-salary');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Pts")').closest('td').addClass('waiv-pts');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Proj")').closest('td').addClass('waiv-proj');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td:contains("Inj")').closest('td').addClass('waiv-inj');
jQuery('tr.head-th td:last-of-type').addClass('scroll-spacer');

// ADD MOBILE VIEW CLASS TO TDs FOR ADD AND DROP SELECT BOXES
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').parent('td').addClass('mobile-view');