<?php
namespace Models;
use MVC\Model;
class ModelsGallery extends Model {
    public function lastrecord($id){
        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "gallery WHERE id=".$id);
        return $query->row;
    }

    public function getallimage(){
        $query = $this->db->query("SELECT * FROM " . DB_PREFIX . "gallery");
        return $query->rows;
    }
   
   
    public function saveimage($data) {
        $array_keys =implode(",", array_keys($data));
        $array_values = "'".implode("','", array_values($data))."'";
        $query = $this->db->query("INSERT INTO " . DB_PREFIX ."gallery (".$array_keys.") VALUES (".$array_values.")");
        $id=$this->db->getLastId();
        $fdata=$this->lastrecord($id);
        return $fdata;
    }
   
    public function Delete($id) {
        $query = $this->db->query("DELETE FROM " . DB_PREFIX ."gallery WHERE id=".$id);
        return $id;
    }
}